import dao from 'dao';

export const findByRoomId = async (roomId, { skip = 0, limit = 20 } = {}) => {
  return await dao.Message.findByRoomId(roomId, { skip, limit });
};

export const create = async (data) => {
  return await dao.Message.create(data);
};
