import StatusCodes from 'http-status-codes';

const responseHandler = () => (req, res, next) => {
  res.success = ({ data, status = StatusCodes.OK }) => {
    res.status(status).json({
      success: true,
      data,
    });
  };

  res.error = ({ error, status = StatusCodes.INTERNAL_SERVER_ERROR }) => {
    res.status(status).json({ success: false, error });
  };

  next();
};

export default responseHandler;
