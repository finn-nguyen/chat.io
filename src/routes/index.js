import express from 'express';
import passport from 'passport';
import Models from 'models';
import Errors from 'utils/errors';
import authRouter from './auth';
import roomRouter from './rooms';

const router = express.Router();
const { User, Room } = Models;

router.use('/auth', authRouter);
router.use('/v1/rooms', roomRouter);

router.get('/', function (req, res, next) {
  // If user is already logged in, then redirect to rooms page
  if (req.isAuthenticated()) {
    res.redirect('/rooms');
  } else {
    res.render('login', {
      success: req.flash('success')[0],
      errors: req.flash('error'),
      showRegisterForm: req.flash('showRegisterForm')[0],
    });
  }
});

// Login
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/rooms',
    failureRedirect: '/',
    failureFlash: true,
  })
);

// Register via username and password
router.post('/register', function (req, res, next) {
  const credentials = {
    username: req.body.username,
    password: req.body.password,
  };

  if (credentials.username === '' || credentials.password === '') {
    req.flash('error', 'Missing credentials');
    req.flash('showRegisterForm', true);
    res.redirect('/');
  } else {
    // Check if the username already exists for non-social account
    User.findOne(
      {
        username: new RegExp('^' + req.body.username + '$', 'i'),
        socialId: null,
      },
      function (err, user) {
        if (err) throw err;
        if (user) {
          req.flash('error', 'Username already exists.');
          req.flash('showRegisterForm', true);
          res.redirect('/');
        } else {
          User.create(credentials, function (err, newUser) {
            if (err) throw err;
            req.flash(
              'success',
              'Your account has been created. Please log in.'
            );
            res.redirect('/');
          });
        }
      }
    );
  }
});

// Social Authentication routes
// 1. Login via Facebook
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/rooms',
    failureRedirect: '/',
    failureFlash: true,
  })
);

// 2. Login via Twitter
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/rooms',
    failureRedirect: '/',
    failureFlash: true,
  })
);

// Rooms
router.get('/rooms', [
  User.isAuthenticated,
  function (req, res, next) {
    Room.find(function (err, rooms) {
      if (err) throw err;
      res.render('rooms', { rooms });
    });
  },
]);

// Chat Room
router.get('/chat/:id', [
  User.isAuthenticated,
  function (req, res, next) {
    const roomId = req.params.id;
    Room.findById(roomId, function (err, room) {
      if (err) throw err;
      if (!room) {
        return next();
      }
      res.render('chatroom', { user: req.user, room: room });
    });
  },
]);

// Logout
router.get('/logout', function (req, res, next) {
  // remove the req.user property and clear the login session
  req.logout();

  // destroy session data
  req.session = null;

  // redirect to homepage
  res.redirect('/');
});

router.get('/error', (req, res, next) => {
  throw new Errors.InternalServer('Internal server error!!!');
});

export default router;
