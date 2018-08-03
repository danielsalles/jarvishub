const routes = server => {
  server.get('/', (req, res) => {
   res.send({ mensagem: 'pong' })
  })
}

module.exports = routes
