import _ from 'lodash';
import ValidatorPipeLine from '../validator-pipeline';
import { presence, number } from '../utils';

const get = (req, res, next) => {
  const data = req.params;

  ValidatorPipeLine(number('id', data));

  next();
};

const create = (req, res, next) => {
  const data = req.body;

  ValidatorPipeLine(presence(['name'], data));

  next();
};

export default { get, create };
