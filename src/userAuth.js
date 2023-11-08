const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(bodyParser.json());

// Connect to database
mongoose.connect('mongodb://localhost:27017/user-auth', { useNewUrlParser: true });

// Define user schema
const userSchema = new mongoose.Schema({
  USN: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String
  },
  officialMailId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

// Create user model
const User = mongoose.model('User', userSchema);

// Configure passport
passport.use(new GoogleStrategy({
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (user) {
        return cb(null, user);
      } else {
        const newUser = new User({
          googleId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          officialMailId: profile.emails[0].value
        });
        newUser.save(function(err) {
          if (err) {
            return cb(err);
          }
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.use(new LocalStrategy({ usernameField: 'USN', passwordField: 'officialMailId' },
  function(USN, officialMailId, done) {
    User.findOne({ USN: USN }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect USN or officialMailId.' });
      }
      if (!user.authenticate(officialMailId)) {
        return done(null, false, { message: 'Incorrect USN or officialMailId.' });
      }
      return done(null, user);
    });
  }
));

app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard');
  }
);

app.post('/login', function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(400).send(err);
    }
    if (!user) {
      return res.status(400).send(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send({ message: 'Successfully logged in.' });
    });
  })(req, res);
});

app.get('/dashboard', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.send({ message: 'You are logged in.' });
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
