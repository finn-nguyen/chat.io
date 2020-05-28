import _ from 'lodash';
import services from 'services';
import transformer from 'transformers/user';

const register = async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const user = await services.User.createUser({ username, email, password, firstName, lastName });
    const transformedUser = transformer.transformUser(user);

    res.json(transformedUser);
  } catch (err) {
    next(err);
  }
};

export default { register };
