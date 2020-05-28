import _ from 'lodash';

const transformUser = (user) => _.omit(user, 'password');

export default {
  transformUser,
};
