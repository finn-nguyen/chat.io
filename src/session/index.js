import session from "express-session";
import connectMongo from "connect-mongo";
import db from "database";
import config from "config";

const MongoStore = connectMongo(session);

const init = function () {
  if (process.env.NODE_ENV === "production") {
    return session({
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: false,
      unset: "destroy",
      store: new MongoStore({ mongooseConnection: db.Mongoose.connection }),
    });
  } else {
    return session({
      secret: config.sessionSecret,
      resave: false,
      unset: "destroy",
      saveUninitialized: true,
    });
  }
};

export default init();
