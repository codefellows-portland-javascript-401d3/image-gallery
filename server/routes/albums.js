const express = require('express');
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');
const router = express.Router();

module.exports = router

  .get('/', (req, res, next)=>{
    Album.find()
      .then(albums=>res.send(albums))
      .catch(next);
  })

  // GET single album by id
  // .get('/:id', (req, res, next)=>{
  //   Album.findById(req.params.id)
  //     .then(album=>res.send(album))
  //     .catch(next);
  // })

  // GET all images with a specific album id
  //TODO add function to verify the album exists
  //Populate the album title in the response
  .get('/:id', (req, res, next)=>{
    Image.find({album: req.params.id})
      .populate({path: 'album', select: 'title'})
      .then(albumContents=>res.send(albumContents))
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
