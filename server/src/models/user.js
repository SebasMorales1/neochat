const { Schema, model } = require('mongoose')

const user = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  gmail: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  }
})

module.exports = model('user', user)