const similar = require('../../elastic/similar')
const addQueueInsert = require('../createJobs/insert')
const bot = require('../../bot/send')

// SEND SIMILARES TO GITHUB
const processSimilar = jobs => jobs.process('similar', 2, (job,done) => {
  similar(job.data)
    .then(d => bot(d.hits.hits, job.data))
    .then(d => {
      console.log('Similar successfully sent.')
      done()
    })
    .then(d => addQueueInsert(job.data))
    .catch(e => {
      console.error(e)
      done(new Error('Error to send similar!'))
    })
})

module.exports = processSimilar
