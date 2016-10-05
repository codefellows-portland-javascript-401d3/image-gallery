const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../lib/token');
const ensureAuth = require('../lib/ensureAuth');

router.post('/signup', bodyParser, (req, res) => {
  console.log(req.body);
  const {username, password} = req.body;
  delete req.body.password;

  if (!password) {
    return res.status(400).json({
      msg: 'Password required.'
    });
  }

  User.findOne({username})
    .then( existing => {
      if (existing) {
        return res.status(500).json({
          msg: 'Unsuccessful',
          reason: 'Username already exists'
        });
      }

      const user = new User(req.body);
      console.log('user created ', user);
      user.generateHash(password);
      return user.save()
        .then(user => token.sign(user))
        .then(token => res.json({token}));
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Unsuccessful',
        reason: err
      });
    });
});

router.post('/signin', bodyParser, (req, res) => {
  const {username, password} = req.body;
  delete req.body;

  User.findOne({username})
    .then(user => {
      if (!user) {
        return res.status(400).json({
          msg: 'authentication failed',
          reason: 'user ' + username + ' does not exist.'
        });
      }

      if (!user.compareHash(password)) {
        return res.status(400).json({
          msg: 'authentication failed',
          reason: 'password does not match'
        });
      }

      token.sign(user).then(token => res.json({token}));

    })
    .catch(err => {
      res.status(500).json({
        msg: 'authentication failed',
        reason: err
      });
    });
});

router.get('/verify', ensureAuth, (req, res) => {
  res.status(200).send({success: true});
});

module.exports = router;
