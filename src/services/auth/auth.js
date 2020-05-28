import _ from 'lodash';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import services from 'services';
import errors from 'utils/errors';
import logger from 'logger';

const hashPassword = async (password) => {
  return await bcrypt.hash(password, config.saltRounds);
};

export const register = async (params) => {
  const { password } = params;
  const passwordHash = await hashPassword(password);
  const user = await services.User.create({
    ...params,
    password: passwordHash,
  });

  return user;
};

export const authenticate = async (token) => {
  try {
    const { id } = await jwt.verify(token, config.sessionSecret);
    const user = await services.User.findById(id);

    return user;
  } catch (err) {
    logger.error(err);

    return null;
  }
};

export const login = async (params) => {
  const { username, password } = params;
  const user = await services.User.findByUsername(username);
  const isAuthenticated = await bcrypt.compare(
    password,
    _.get(user, 'password', '')
  );
  if (!isAuthenticated) {
    throw new errors.Unauthorized('Username or password is incorrect');
  }

  const token = jwt.sign({ id: _.get(user, 'id') }, config.sessionSecret, {
    expiresIn: 60 * 60 * 24,
  });

  return {
    ...user,
    token,
  };
};
