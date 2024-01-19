const userModel = require('../models/user.js')
const hasErrors = require('../utils/hasErrors.js')
const bcrypt = require('bcryptjs')

const msgError = 'Internal Error'

const register = async (req, res) => {
  const { name, email, password } = req.body

  const errors = hasErrors(req)

  if (errors.length)
    return res.status(400).json({ errors })

  const hashPasword = await bcrypt.hash(password, 10)

  const newUser = new userModel({
    name,
    email,
    password: hashPasword
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

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModel.find({ email })
    const failMessage = 'Invalid email or password'
    
    if (!user.length) 
      return res.status(400).json({ message: failMessage })

    const matchPasswords = await bcrypt.compare(password, user[0].password)

    if (!matchPasswords) 
      return res.status(400).json({ message: failMessage })

    return res.json({
      message: 'User logged',
      user: {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email
      }
    })
  } catch (error) {
    console.error(`Error when user tries login: ${error}`)
    res.status(500).json({ message: msgError })
  }
}

module.exports = { register, login  }