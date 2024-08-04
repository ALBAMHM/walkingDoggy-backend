const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
  },
  size: {
    type: String,
  },
  personality: {
    type: String,
  },
  preferences: {
    type: String,
  },
  photo_url: {
    type: String,
  },
  owner: { type: Schema.Types.ObjectId,
     ref: 'User', 
     required: true }
});

module.exports = mongoose.model('Pet', PetSchema);