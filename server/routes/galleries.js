'use strict';

const express = require('express');
const router = express.Router();
const bodyparser = require('../bodyparser');
const Gallery = require('../models/gallery');

module.exports = router

.get('', (req,res,next) => {
  Gallery.find()
  .lean()
  .then( galleries => res.send(galleries) )
  .catch( err => {
    console.log('error getting full gallery list');
    console.log(err);
    next(err);
  });
})

.get('/count', (req,res,next) => {
  Gallery.count()
  .lean()
  .then( galleries => res.send(galleries) )
  .catch( err => {
    console.log('error getting gallery list length');
    console.log(err);
    next(err);
  });
})

.get('/:id', (req,res,next) => {
  Gallery.findById(req.params.id)
  .lean()
  .populate('images')
  .then( gallery => res.send(gallery) )
  .catch( err => {
    console.log('error getting an gallery by id');
    console.log(err);
    next(err);
  });
})

// create new gallery in db
.post('', bodyparser, (req,res,next) => {
  new Gallery(req.body)
  .save()
  .then( gallery => res.send(gallery) )
  .catch( err => {
    console.log('error creating a new gallery');
    console.log(err);
    next(err);
  });
})

//add images to existing gallery
.put('/:id', bodyparser, (req,res,next) => {
  Gallery.findById(req.params.id)
  .then( gallery => {
    gallery.images = gallery.images.concat(req.body.images);
    return gallery.save();
  })
  .then( gallery => {
    res.send(gallery);
  })
  .catch( err => {
    console.log('error creating a new gallery');
    console.log(err);
    next(err);
  });
})

.delete('/:id', (req,res,next) => {
  Gallery.findByIdAndRemove(req.params.id)
  .lean()
  .then( deleted => res.send(deleted) )
  .catch( err => {
    console.log('error deleting a gallery by id');
    console.log(err);
    next(err);
  });
})

;
