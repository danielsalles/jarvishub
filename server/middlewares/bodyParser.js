const restify = require('restify')

const middleware = server => {
  server.use(restify.plugins.bodyParser())
}

module.exports = middleware
