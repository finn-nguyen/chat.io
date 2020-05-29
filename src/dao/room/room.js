import db from 'db';
import SeqUtils from 'utils/sequelize';

export const create = async (name) => {
  const room = await db.Room.create({ name });

  return SeqUtils.toJSON(room);
};

export const findAll = async () => {
  const rooms = await db.Room.findAll();

  return SeqUtils.toJSON(rooms);
};

export const findById = async (id) => {
  const room = await db.Room.findByPk(id);

  return SeqUtils.toJSON(room);
};
