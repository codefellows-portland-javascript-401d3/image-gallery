const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');
// const token = require('../lib/token');
// const ensureAuth = require('../lib/ensureAuth');

module.exports = router
  .get('/', (req, res, next) => {
    User.find()
      .sort({createdAt: -1})
      .then(users => res.send(users))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    User.findByUser(req.params.id)
      .then(user => res.send(user))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new User(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })
  .put('/:id', bodyParser, (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', bodyParser, (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then(removed => res.send(removed))
      .catch(next);
  });
