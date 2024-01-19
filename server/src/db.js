const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.DB_CONNECTION)

module.exports = connection