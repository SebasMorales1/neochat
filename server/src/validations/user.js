const { body } = require('express-validator')
const userModel = require('../models/user.js')

const name = () => (
  body('name')
  .isLength({ min:3, max:30})
  .withMessage('The name must be a minimum of 3 characters and a maximum of 30 characters.')
  .exists()
  .withMessage('The name is required')
)

const email = () => (
  body('email')
  .isEmail()
  .withMessage('The email is not validate')
  .exists()
  .withMessage('The email is required')
  .custom(async (value) => {
    const email = await userModel.find({ email: value })

    if (email.length)
      throw new Error('The email is already taken')

    return true
  })
)

const password = () => (
  body('password')
  .isLength({ min:8, max:30 })
  .withMessage('The password must be a minimum of 3 characters and a maximum of 30 characters.')
  .exists()
  .withMessage('The password is required')
)

const confirmPassword = () => (
  body('confirm_password')
  .custom((value, { req }) => {
    if (value !== req.body.password)
      throw new Error('The passwords are not equal')
    return true
  })
)

module.exports = { name, email, password, confirmPassword}