import logger from 'logger';

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  logger.error(err);

  if (statusCode) {
    return res.error({ status: statusCode, error: message });
  }

  return res.error({ error: message });
};

export default errorHandler;
