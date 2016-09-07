const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Album = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true
  });

Album.statics.findByUser = function (userId) {
  return this.find({user: userId})
    .then(albums => {
      if (!albums) throw {status: 400, message: 'You have no albums.'};
      return albums;
    });
};

module.exports = mongoose.model('Album', Album);
