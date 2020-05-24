import Mongoose from "mongoose";
import config from "config";
import logger from "logger";
import models from "./schemas";

const dbURI = config.dbUrl;

logger.info("Mongo init");

Mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

Mongoose.connection.on("error", function (err) {
  if (err) throw err;
});

// mpromise (mongoose's default promise library) is deprecated,
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

export default {
  Mongoose,
  models,
};
