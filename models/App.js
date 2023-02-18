const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: Number,
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please provide a firstname"],
    maxLength: [120, "characters must not be more than 120"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please provide a firstname"],
    maxLength: [120, "characters must not be more than 120"],
  },
  maidenName: {
    type: String,
    trim: true,
    required: false,
    maxLength: [120, "characters must not be more than 120"],
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  birthDate: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
    minLength: [15, "Must be an image url"],
  },
  bloodGroup: {
    type: String,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  eyeColor: {
    type: String,
    required: false,
  },
});

module.exports = new mongoose.model('Data', dataSchema);