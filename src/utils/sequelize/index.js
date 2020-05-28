import _ from 'lodash';

const sequelizeObjToJSON = (sequelizeObj) => {
  if (sequelizeObj) {
    return sequelizeObj.toJSON();
  }

  return null;
};

const toJSON = (sequelizeObj) => {
  return _.isArray(sequelizeObj) ? _.map(sequelizeObj, sequelizeObjToJSON) : sequelizeObjToJSON(sequelizeObj);
};

export default { toJSON };
