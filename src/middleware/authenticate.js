import _ from 'lodash';
import Errors from 'utils/errors';
import services from 'services';

const authenticate = async (req, res, next) => {
  const authorization = _.get(req.headers, 'authorization', '');
  const [prefix, token] = _.split(authorization, ' ');
  if (prefix !== 'Bearer' || _.isEmpty(token)) {
    next(new Errors.Unauthorized());
  }

  const user = await services.Auth.authenticate(token);
  if (!user) {
    next(new Errors.Unauthorized());
  }

  req.user = user;

  next();
};

export default authenticate;
