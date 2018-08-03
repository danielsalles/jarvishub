const bodyParser = require('./bodyParser')

const middlewares = server => {
  bodyParser(server)
}

module.exports = middlewares
