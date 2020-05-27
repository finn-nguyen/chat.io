import Dao from 'dao';

export const createUser = async (params) => {
  return await Dao.User.create(params);
};

export const findById = async (id) => {
  return await Dao.User.findById(id);
};
