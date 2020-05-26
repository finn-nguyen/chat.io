import socketHandler from 'socket';
import logger from 'logger';

const createSocketServer = (app) => {
  logger.info('Init socket server');
  const socketServer = socketHandler(app);

  return socketServer;
};

export default createSocketServer;
