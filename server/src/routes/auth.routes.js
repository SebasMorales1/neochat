const { Router } = require('express')
const { name, email, password, confirmPassword } = require('../validations/user.js')
const { register, login, logout } = require('../controllers/auth.js')
const verifyAccessToken = require('../middlewares/verifyAccessToken.js')

const router = Router()

router.post('/api/register',
  name(),
  email(),
  password(), 
  confirmPassword(),
  register
)

router.post('/api/login', login)
router.get('/api/logout', verifyAccessToken, logout)

module.exports = router