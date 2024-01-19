const { Router } = require('express')
const { name, email, password, confirmPassword } = require('../validations/user.js')
const { register } = require('../controllers/auth.js')

const router = Router()

router.post('/api/register',
  name(),
  email(),
  password(), 
  confirmPassword(),
  register
)

module.exports = router