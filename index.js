const restify = require('restify')
const addQueueSimilar = require('./queue/createJobs/similar')

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
    addQueueSimilar(response.issue)
      .then(d => {
        console.log('Add issue queue to search similar issue.')
        res.send({ msg: 'OK' })
      })
      .catch(e => {
        console.error('Restify error: ', e)
        res.send(500, { msg: 'bad' })
      })
  }
})

// UP SERVER
server.listen(4000, () => {
  console.log('Server up')
})
