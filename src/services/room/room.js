import dao from 'dao';

export const create = async (name) => {
  return await dao.Room.create(name);
};

export const findAll = async () => {
  return await dao.Room.findAll();
};

export const findById = async (id) => {
  return await dao.Room.findById(id);
};
