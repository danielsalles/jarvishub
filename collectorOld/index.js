const request = require('../services/issueRequest')
const arrayPagination = require('../helper/arrayPagination')
const addQueueInsert = require('../queue/createJobs/insert')

const insertEach = array => array.forEach((value, index) => addQueueInsert(value).then(r => console.log('Added issue in Queue.')).catch(e => console.error('ERROR QUEUE', e)))

const execute = obj => request(obj)
                        .then(result => {
                          insertEach(result.data)

                          return arrayPagination(result.headers.link)
                        })
                        .then(result => result.forEach(value => request(obj, value).then(r => insertEach(r.data))))
                        .catch(e => console.error('Error collector', e))

module.exports = execute
