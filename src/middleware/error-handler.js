import HttpStatusCode from 'http-status-codes';
import logger from 'logger';

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  logger.error(err);

  if (statusCode) {
    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
    });
  }

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    message,
  });
};

export default errorHandler;
