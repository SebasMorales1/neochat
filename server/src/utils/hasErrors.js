const { validationResult } = require('express-validator')

const hasErrors = (req) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) 
    return errors.array()

  return []
}

module.exports = hasErrors