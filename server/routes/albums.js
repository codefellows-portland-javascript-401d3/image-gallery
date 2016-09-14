const express = require('express');
const parser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');
const router = express.Router();

module.exports = router

  // get all albums -- /api/albums/
  .get('/', (request, response, next) => {
    Album.find()
      .then(albums => response.send(albums))
      .catch(next);
  })

  // get specific album -- /api/albums/:id
  .get('/:id', (request, response, next) => {
    Album.findById(request.params.id)
      .then(album => response.send(album))
      .catch(next);
  })

  // get all images belonging to specific album -- /api/albums/:id/images
  .get('/:id/images', (request, response, next) => {
    Image.find({album: request.params.id})
      .populate({path: 'album', select: 'title caption link _id'})
      .then(albumImages => {
        response.send(albumImages);
      })
      .catch(next);
  })

  // add new albums -- /api/albums/
  .post('/', parser, (request, response, next) => {
    new Album(request.body).save()
      .then(saved => response.send(saved))
      .catch(next);
  })

  .post('/:id/images', parser, (request, response, next) => {
    console.log('request body', request.body);
    new Image(request.body).save()
      .then(saved => response.send(saved))
      .catch(next);
  })

  // update specific album -- /api/albums/:id
  .put('/:id', parser, (request, response, next) => {
    Album.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
      .then(updated => response.send(updated))
      .catch(next);
  })

  // remove specific album -- /api/albums/:id
  .delete('/:id', (request, response, next) => {
    Image.find({album: request.params.id}).remove()
      .then(() => {
        return Album.findByIdAndRemove(request.params.id);
      })
      .then(deleted => response.send(deleted))
      .catch(next);
  });
