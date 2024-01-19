const userModel = require('../models/user.js')
const hasErrors = require('../utils/hasErrors.js')

const msgError = 'Internal Error'

const register = async (req, res) => {
  const { name, email, password } = req.body

  const errors = hasErrors(req)

  if (errors.length)
    return res.status(400).json({ errors })

  const newUser = new userModel({
    name,
    email,
    password
  })

  try {
    await newUser.save()

    res.status(200).json({ 
      message: 'User registered',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    })
  } catch (error) {
    console.error(`Error when create a new user: ${error}`)
    res.status(500).json({ message: msgError })
  }
}

module.exports = { register  }