import messageDB from 'message-db';

export const findByRoomId = async (roomId, { skip, limit }) => {
  const messages = await messageDB.Message.find({ room: roomId })
    .skip(skip)
    .limit(limit)
    .exec();

  return messages;
};

export const create = async (data) => {
  const message = await messageDB.Message.create(data);

  return message;
};
