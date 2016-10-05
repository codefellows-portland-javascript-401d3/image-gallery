const express = require('express');
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const router = express.Router();

module.exports = router
  .get('/', (req, res, next) => {
    Album.find()
      .sort({createdAt: -1})
      .then(albums => res.send(albums))
      .catch(next);
  })
  .get('/:userId', (req, res, next) => {
    Album.findByUser(req.params.userId)
      .then(album => res.send(album))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })
  .put('/:id', bodyParser, (req, res, next) => {
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', bodyParser, (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(removed => res.send(removed))
      .catch(next);
  });
