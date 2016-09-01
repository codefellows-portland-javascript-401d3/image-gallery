const express = require('express');
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const router = express.Router();

module.exports = router

  .get('/', (req, res, next)=>{
    Album.find()
      .then(albums=>res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next)=>{
    Album.findById(req.params.id)
      .then(album=>res.send(album))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next)=>{
    new Album(req.body).save()
      .then(saved=>res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next)=>{
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(updated=>res.send(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next)=>{
    Album.findByIdAndRemove(req.params.id)
      .then(deleted=>res.send(deleted))
      .catch(next);
  });
