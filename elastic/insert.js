const client = require('./instance')

const insert = obj => client.create({
                        index: 'github',
                        type: 'issue',
                        id: obj.id,
                        body: obj
                      })
                      .catch(e => console.error('Elastic Search Error', e))

module.exports = insert
