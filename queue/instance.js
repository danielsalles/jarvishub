require('dotenv').config()
const kue = require('kue')

const q = kue.createQueue({
  prefix: 'q',
  redis: {
    port: process.env.PORT_REDIS,
    host: process.env.HOST_REDIS,
    auth: process.env.PASSWORD_REDIS,
    db: 3
  }
})

module.exports = { q, kue }
