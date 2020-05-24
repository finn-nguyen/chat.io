import passport from "passport";
import PassportLocal from "passport-local";
import PassportFacebook from "passport-facebook";
import PassportTwitter from "passport-twitter";
import User from "models/user";
import config from "config";
import logger from "logger";

const LocalStrategy = PassportLocal.Strategy;
const FacebookStrategy = PassportFacebook.Strategy;
const TwitterStrategy = PassportTwitter.Strategy;

const init = function () {
  logger.info("Oauth init");
  // Serialize and Deserialize user instances to and from the session.
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // Plug-in Local Strategy
  passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne(
        { username: new RegExp(username, "i"), socialId: null },
        function (err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false, {
              message: "Incorrect username or password.",
            });
          }

          user.validatePassword(password, function (err, isMatch) {
            if (err) {
              return done(err);
            }
            if (!isMatch) {
              return done(null, false, {
                message: "Incorrect username or password.",
              });
            }
            return done(null, user);
          });
        }
      );
    })
  );

  // In case of Facebook, tokenA is the access token, while tokenB is the refersh token.
  // In case of Twitter, tokenA is the token, whilet tokenB is the tokenSecret.
  const verifySocialAccount = function (tokenA, tokenB, data, done) {
    User.findOrCreate(data, function (err, user) {
      if (err) {
        return done(err);
      }
      return done(err, user);
    });
  };

  // Plug-in Facebook & Twitter Strategies
  passport.use(new FacebookStrategy(config.facebook, verifySocialAccount));
  passport.use(new TwitterStrategy(config.twitter, verifySocialAccount));

  return passport;
};

export default init();
