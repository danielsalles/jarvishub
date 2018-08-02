const issueHook = require('./issueHook')
const main = require('./main')

const routes = server => {
  issueHook(server)
  main(server)
}

module.exports = routes
