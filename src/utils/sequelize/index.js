import _ from 'lodash';

const sequelizeObjToJSON = (sequelizeObj) => (_.has(sequelizeObj, 'toJSON') ? sequelizeObj.toJSON() : sequelizeObj);

const toJSON = (sequelizeObj) => {
  return _.isArray(sequelizeObj) ? _.map(sequelizeObj, sequelizeObjToJSON) : sequelizeObjToJSON(sequelizeObj);
};

export default { toJSON };
