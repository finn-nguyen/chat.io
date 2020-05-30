import services from 'services';

const get = async (req, res, next) => {
  try {
    const { roomId } = req;
    const messages = await services.Message.findByRoomId(roomId);

    res.json(messages);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const message = await services.Message.create(data);

    res.json(message);
  } catch (er) {
    next(err);
  }
};

export default { get, create };
