require('dotenv').config()
const { q, kue } = require('./instance')
const processInsert = require('./process/insert')

// HERE CALLS THE FUNCTIONS THAT PROCEED WITH QUEUE
processInsert(q)

kue.app.listen(3000)

console.log('INITIATED QUEUE')
