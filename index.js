require('dotenv').config()

const restify = require('restify')
const routes = require('./server/routes')
const middlewares = require('./server/middlewares')

const server = restify.createServer()

// MIDDLEWARES LOAD
middlewares(server)

// ROUTES LOAD
routes(server)

// UP SERVER
server.listen(4000, () => {
  console.log('Server up')
})
