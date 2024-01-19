const { Router } = require('express')
const { validationResult } = require('express-validator')
const { name, email, password, confirmPassword } = require('../validations/user.js')

const router = Router()

router.post('/api/register',
  name(),
  email(),
  password(), 
  confirmPassword(),
  (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) 
      return res.status(400).json({ errors: errors.array() })

    res.json({ message: 'Register' })
  }
)

module.exports = router