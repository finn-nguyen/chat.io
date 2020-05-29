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

const isNumber = (field, data) => () => {
  const value = _.get(data, field);
  if (!_.isNumber(value)) {
    throw new Errors.BadRequest(`${field} is not a number`);
  }
};

const get = (req, res, next) => {
  const data = req.params;

  ValidatorPipeLine(isNumber('id', data));

  next();
};

const create = (req, res, next) => {
  const data = req.body;

  ValidatorPipeLine(presence(['name'], data));

  next();
};

export default { get, create };
