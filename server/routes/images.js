const express = require('express');
const parser = require('body-parser').json();
const Image = require('../models/image');
const router = express.Router();

module.exports = router
  // will call to http://localhost:WXYZ/api/images

  // get all images -- /api/images
  .get('/', (request, response, next) => {
    Image.find()
      .then(images => response.send(images))
      .catch(next);
  })

  // get specific image -- /api/images/:id
  .get('/:id', (request, response, next) => {
    Image.findById(request.params.id)
      .then(image => response.send(image))
      .catch(next);
  })

  // add new image -- /api/images
  .post('/', parser, (request, response, next) => {
    new Image(request.body).save()
      .then(saved => response.send(saved))
      .catch(next);
  })

  // update an image -- /api/images/:id
  .put('/:id', parser, (request, response, next) => {
    Image.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
      .then(updated => response.send(updated))
      .catch(next);
  })

  // remove an image -- /api/images/:id
  .delete('/:id', (request, response, next) => {
    Image.findByIdAndRemove(request.params.id)
      .then(deleted => response.send(deleted))
      .catch(next);
  });
