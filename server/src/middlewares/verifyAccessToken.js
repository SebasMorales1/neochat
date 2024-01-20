const jwt = require('jsonwebtoken')
const InvalidToken = require('../models/invalidToken.js')

const verifyAccessToken = async (req, res, next) => {
  const token = req.get('authorization')

  if (!token || !token.startsWith('Bearer '))
    return res.status(401).json({ message: 'lost Token or invalidate token format' })

  try {
    const formatToken = token.slice(7)
    const existsInvalidToken =  await InvalidToken.find({ token: formatToken })

    if (existsInvalidToken.length)
      return res.status(401).json({ message: 'Invalid token' })

    jwt.verify(formatToken, process.env.SECRET_KEY)

    next()
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError)
      res.status(401).json({ message: 'Token expired' })
    else if (error instanceof jwt.JsonWebTokenError)
      res.status(401).json({ message: 'Token malformed' })
    else {
      console.log(`Error when verify the access token: ${error}`)
      res.status(500).json('Internal error')
    }
  }
}

module.exports = verifyAccessToken