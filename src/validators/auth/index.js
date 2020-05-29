import _ from 'lodash';
import ValidatorPipeLine from '../validator-pipeline';
import { presence, length, email } from '../utils';

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
    email(data)
  );

  next();
};

export default { login, register };
