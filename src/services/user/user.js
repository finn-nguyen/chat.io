import _ from 'lodash';
import bcrypt from 'bcrypt';
import config from 'config';
import Dao from 'dao';

export const createUser = async (params) => {
  const { password } = params;
  const passwordHash = await bcrypt.hash(password, config.saltRounds);
  const user = await Dao.User.create({ ...params, password: passwordHash });

  return user;
};

export const findById = async (id) => {
  return await Dao.User.findById(id);
};
