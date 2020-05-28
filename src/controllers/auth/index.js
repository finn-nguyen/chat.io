import _ from 'lodash';
import services from 'services';
import transformer from 'transformers/user';

const register = async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const user = await services.Auth.register({ username, email, password, firstName, lastName });
    const transformedUser = transformer.transformUser(user);

    res.json(transformedUser);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await services.Auth.login({ username, password });
    const transformedUser = transformer.transformUser(user);

    res.json(transformedUser);
  } catch (err) {
    next(err);
  }
};

export default { register, login };
