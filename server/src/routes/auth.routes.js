const { Router } = require('express')
const { name, email, password, confirmPassword } = require('../validations/user.js')
const { register, login } = require('../controllers/auth.js')

const router = Router()

router.post('/api/register',
  name(),
  email(),
  password(), 
  confirmPassword(),
  register
)

router.post('/api/login', login)

module.exports = router