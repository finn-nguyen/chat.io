"use strict";

var Mongoose = require("mongoose");
import config from "config";
console.log({ config });
var logger = require("logger");

// Connect to the database
// construct the database URI and encode username and password.

var dbURI = config.dbUrl;

Mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Throw an error if the connection fails
Mongoose.connection.on("error", function (err) {
  if (err) throw err;
});

// mpromise (mongoose's default promise library) is deprecated,
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

const user = require("database/schemas/user.js");
const room = require("database/schemas/room.js");

export default {
  Mongoose,
  models: {
    user,
    room,
  },
};

// module.exports = {
//   Mongoose,
//   models: {
//     user: require('./schemas/user.js'),
//     room: require('./schemas/room.js'),
//   },
// };
