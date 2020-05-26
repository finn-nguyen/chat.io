import http from 'http';
import logger from 'logger';

const createHttpServer = (app) => {
  logger.info('Init http server');
  const httpServer = http.createServer(app);

  return httpServer;
};

export default createHttpServer;
