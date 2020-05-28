import db from 'db';
import SeqUtils from 'utils/sequelize';

export const create = async (params) => {
  const user = await db.User.create(params);

  return SeqUtils.toJSON(user);
};

export const findById = async (id) => {
  const user = await db.User.findByPk(id);

  return SeqUtils.toJSON(user);
};

export const findByUsername = async (username) => {
  const user = await db.User.findOne({ where: { username } });

  return SeqUtils.toJSON(user);
};
