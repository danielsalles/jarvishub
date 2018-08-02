const client = require('./instance')

const insert = obj => client.create({
                          index: 'github',
                          type: 'issue',
                          id: obj.data.id,
                          body: obj.data
                        })

module.exports = insert
