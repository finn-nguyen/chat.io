import _ from 'lodash';
import Errors from 'utils/errors';
import ValidatorPipeLine from '../validator-pipeline';

const presence = (fields, data) => () => {
  _.each(fields, (field) => {
    const value = _.get(data, field);
    if (_.isEmpty(value)) {
      throw new Errors.BadRequest(`${field} is required`);
    }
  });
};

const length = (field, data, minLength = 6, maxLength = 50) => () => {
  const length = _.get(data, field).length;
  if (length < minLength || length > maxLength) {
    throw new Errors.BadRequest(
      `${field} length is must between ${minLength} and ${maxLength}`
    );
  }
};

const emailFormat = (data) => () => {
  const { email } = data;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    throw new Errors.BadRequest('email is invalid');
  }
};

const login = (req, res, next) => {
  const data = req.body;

  ValidatorPipeLine(presence(['username', 'password'], data));

  next();
};

const register = (req, res, next) => {
  const data = req.body;

  ValidatorPipeLine(
    presence(['username', 'password', 'email', 'firstName', 'lastName'], data),
    length('username', data),
    emailFormat(data)
  );

  next();
};

export default { login, register };
