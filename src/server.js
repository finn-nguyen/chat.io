import 'dotenv/config';
import app from 'app';
import config from 'config';
import logger from 'logger';
import createHttpServer from 'httpServer';
import createSocketServer from 'socketServer';

const httpServer = createHttpServer(app);
const socketServer = createSocketServer(app);

httpServer.listen(config.httpPort, () => {
  logger.info(`Http server is listening at port ${config.httpPort}`);
});

socketServer.listen(config.socketPort, () => {
  logger.info(`Socket server is listening at port ${config.socketPort}`);
});
