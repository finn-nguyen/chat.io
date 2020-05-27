import fs from 'fs';
import path from 'path';
import Sequelize, { DataTypes } from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

const db = new Sequelize(config.database, config.username, config.password, { ...config, query: { raw: true } });

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const module = require(path.join(__dirname, 'models', file));
    const model = module(db, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Op = Sequelize.Op;
db.literal = Sequelize.literal;

export default db;
