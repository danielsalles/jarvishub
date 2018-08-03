require('dotenv').config()
const { q, kue } = require('./instance')
const processInsert = require('./process/insert')
const processSimilar = require('./process/similar')

// HERE CALLS THE FUNCTIONS THAT PROCEED WITH QUEUE
processInsert(q)
processSimilar(q)

kue.app.listen(3000)

console.log('INITIATED QUEUE')
