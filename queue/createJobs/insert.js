const jobs = require('../index')

const insert = obj => new Promise((resolve, reject) => {
  const job = jobs.create('insert', obj)
                        .priority('normal')
                        .attempts(5)
                        .save(err => {
                          err ? reject(err) : resolve(job.id)
                        })
})

module.exports = insert
