const restify = require('restify')
const similar = require('./elastic/similar')
const insert = require('./elastic/insert')
const bot = require('./bot/send')

require('dotenv').config()

const server = restify.createServer()

server.use(restify.plugins.bodyParser())

// ROUTES
server.get('/', (req, res) => {
 res.send({ mensagem: 'pong' })
})

server.post('/issuehook', (req, res) => {
  const response = req.body

  if (response.action === 'opened') {
    similar(response.issue)
      .then(d => bot(d.hits.hits, response.issue))
      .then(d => console.log('Similar successfully sent.'))
      .then(d => insert(response.issue))
      .then(d => console.log('Indexed successfully.'))
      .then(d => res.send({ msg: 'OK' }))
      .catch(e => console.error(e))
  }
})

// UP SERVER
server.listen(3000, () => {
  console.log('Server up')
})
