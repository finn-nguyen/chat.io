import services from 'services';

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const room = await services.Room.create(name);

    res.json(room);
  } catch (err) {
    next(err);
  }
};

const list = async (req, res, next) => {
  try {
    const rooms = await services.Room.findAll();

    res.json(rooms);
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const { id: roomId } = req.params;
    const room = await services.Room.findById(roomId);

    res.json(room);
  } catch (err) {
    next(err);
  }
};

export default { create, list, get };
