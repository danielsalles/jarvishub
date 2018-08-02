const client = require('./instance')

const insert = obj => client.create({
                          index: 'github',
                          type: 'issue',
                          id: obj.id,
                          body: obj
                        })

module.exports = insert
