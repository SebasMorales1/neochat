const jwt = require('jsonwebtoken')

const createAccessToken = async (id) => {
  return new Promise((resolver, reject) => {
    jwt.sign(
      { id },
      process.env.SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES },
      function (err, token) {
        if (err)
          reject(err)
        resolver(token)
      }
    )
  })
}

module.exports = createAccessToken