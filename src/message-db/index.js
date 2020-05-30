import mongoose from 'mongoose';
import config from 'config';
import logger from 'logger';
import schemas from './schemas';

const authenticate = () => {
  logger.info('Init MongoDB');

  mongoose.connect(config.mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('error', (err) => {
    logger.error('Failed to init mongo!', err);
    throw err;
  });

  mongoose.Promise = global.Promise;
};

export default { authenticate, ...schemas };
