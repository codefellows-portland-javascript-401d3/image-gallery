const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema({
  title: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  vote: {
    type: Number,
    default: 0
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
}, {
  timestamps: true
});

Image.statics.changeVote = function (id, vote) {
  return this.findById(id)
    .then(image => {
      if (!image) throw {status: 400, message: 'Image Not Found.'};
      if (vote == 1) {
        image.vote++;
      } else { image.vote--;}
      return image.save();
    });
};

Image.statics.findByAlbum = function (albumId) {
  return this.find({album: albumId})
    .then(images => {
      if (!images) throw {status: 400, message: 'No images in that album.'};
      return images;
    });
};

module.exports = mongoose.model('Image', Image);
