import Dao from 'dao';

export const create = async (params) => {
  return await Dao.User.create(params);
};

export const findById = async (id) => {
  return await Dao.User.findById(id);
};

export const findByUsername = async (username) => {
  return await Dao.User.findByUsername(username);
};
