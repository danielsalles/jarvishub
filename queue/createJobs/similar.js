const { q } = require('../instance')

const similar = obj => new Promise((resolve, reject) => {
  const job = q.create('similar', obj)
                        .priority('normal')
                        .attempts(5)
                        .save(err => {
                          err ? reject(err) : resolve(job.id)
                        })
})

module.exports = similar
