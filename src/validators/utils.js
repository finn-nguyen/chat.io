import _ from 'lodash';
import Errors from 'utils/errors';

export const email = (data) => () => {
  const { email } = data;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    throw new Errors.BadRequest('email is invalid');
  }
};

export const presence = (fields, data) => () => {
  _.each(fields, (field) => {
    const value = _.get(data, field);
    if (_.isEmpty(value)) {
      throw new Errors.BadRequest(`${field} is required`);
    }
  });
};

export const length = (field, data, minLength = 6, maxLength = 50) => () => {
  const length = _.get(data, field).length;
  if (length < minLength || length > maxLength) {
    throw new Errors.BadRequest(`${field} length is must between ${minLength} and ${maxLength}`);
  }
};

export const number = (field, data) => () => {
  const value = _.get(data, field);
  if (!_.isNumber(value)) {
    throw new Errors.NotFound();
  }
};
