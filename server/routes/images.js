const express = require('express');
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const router = express.Router();

module.exports = router

  .get('/', (req, res, next)=>{
    Image.find()
      .then(images=>res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next)=>{
    Image.findById(req.params.id)
      .then(image=>res.send(image))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next)=>{
    new Image(req.body).save()
      .then(saved=>res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next)=>{
    Image.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(updated=>res.send(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next)=>{
    Image.findByIdAndRemove(req.params.id)
      .then(deleted=>res.send(deleted))
      .catch(next);
  });
