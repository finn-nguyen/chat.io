import _ from 'lodash';
import services from 'services';
import transformer from 'transformers/message';

const get = async (req, res, next) => {
  try {
    const { roomId } = req;
    const messages = await services.Message.findByRoomId(roomId);
    const transformedMessages = _.map(messages, transformer.transformMessage);

    res.success({ data: transformedMessages });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const message = await services.Message.create(data);
    const transformedMessage = transformer.transformMessage(message);

    res.success({ data: transformedMessage });
  } catch (err) {
    next(err);
  }
};

export default { get, create };
