import _ from 'lodash';

const transformMessage = (message) => {
  return {
    id: _.get(message, 'id'),
    sender: _.get(message, 'sender'),
    receiver: _.get(message, 'receiver'),
    content: _.get(message, 'content'),
    roomId: _.get(message, 'room'),
    createdAt: _.get(message, 'createdAt'),
    updatedAt: _.get(message, 'updatedAt'),
  };
};

export default { transformMessage };
