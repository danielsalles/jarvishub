const { q } = require('../instance')

const insert = obj => new Promise((resolve, reject) => {
  const job = q.create('insert', obj)
                        .priority('normal')
                        .attempts(5)
                        .save(err => {
                          err ? reject(err) : resolve(job.id)
                        })
})

module.exports = insert
