const insert = require('../../elastic/insert')

// ADD IN ELASTIC SEARCH IN 5 IN 5 SIMULTANEOUSLY.
const processInsert = jobs => jobs.process('insert', 5, (job,done) => {
  insert(job)
    .then(d => {
      console.log('ISSUE ADDED IN ELASTIC SEARCH WITH SUCCESS.')
      done()
    })
    .catch(e => {
      console.error('ELASTIC SEARCH QUEUE INSERT', e)
      done(new Error(e))
    })
})

module.exports = processInsert
