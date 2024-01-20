const { Schema, model } = require('mongoose')

const invalidToken = new Schema({
  token: {
    type: String,
    require: true
  },
  
}, 
{
  timestamps: true
}
)

module.exports = model('invalidToken', invalidToken)