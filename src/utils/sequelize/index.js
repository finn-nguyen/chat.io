import _ from 'lodash';

const sequelizeObjToJSON = (sequelizeObj) => sequelizeObj.toJSON();

const toJSON = (sequelizeObj) => {
  return _.isArray(sequelizeObj) ? _.map(sequelizeObj, sequelizeObjToJSON) : sequelizeObjToJSON(sequelizeObj);
};

export default { toJSON };
