require('dotenv').config()
const processInsert = require('./process/insert')

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

// HERE CALLS THE FUNCTIONS THAT PROCEED WITH QUEUE
processInsert(q)

kue.app.listen(3000)

module.exports = q
