const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
  const authToken = req.headers.authorization
  logger.error(`Unauthorized request to path: ${req.path}`)

  if (!authToken || authToken !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized request' })
  }

  next()
}

module.exports = validateBearerToken