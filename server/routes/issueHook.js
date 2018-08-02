const addQueueSimilar = require('../../queue/createJobs/similar')

const routes = server => {
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
}

module.exports = routes
