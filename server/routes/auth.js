const router = require('express').Router();
const parser = require('body-parser').json();
const User = require('../models/user');
const token = require('../auth/token');
const ensureAuth = require('../auth/ensureAuth');

module.exports = router

  .post('/signup', parser, (request, response) => {
    const {email, password} = request.body;
    delete request.body.password;

    if (!email || password) {
      return response.status(400).json({
        message: 'Please add both an email address and password',
      });
    }

    User.findOne({email})
      .then(exist => {
        if (exist) {
          return response.status(500).json({
            message: 'Email address is already taken, please try another.'
          });
        }

        const user = new User(request.body);
        user.generateHash(password);
        return user.save()
          .then(user => token.sign(user))
          .then(token => response.json({token}));
      })
      .catch(error => {
        console.log('ERROR AT SIGNUP: ', error);
        response.status(500).json({
          message: 'There was an issue processing your signup, please try again later.'
        });
      });
  })

  .post('/signin', parser, (request, response) => {
    const {email, password} = request.body;
    delete request.body;

    User.findOne({email})
      .then(user => {
        if(!user || !user.compareHash(password)) {
          return response.status(400).json({
            message: 'Invalid email or password, please try again.'
          });
        }

        token.sign(user)
          .then(token => response.json({token}));
      })
      .catch(error => {
        console.log('ERROR AT SIGNIN: ', error);
        response.status(500).json({
          message: 'There was an issue processing your signin, please try again later.'
        });
      });
  })

  .get('/verify', ensureAuth, (request, response) => {
    response.status(200).send({success:true});
  });
