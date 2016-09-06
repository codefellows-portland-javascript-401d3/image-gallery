const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Album = new Schema({
  name: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  });

module.exports = mongoose.model('Album', Album);
