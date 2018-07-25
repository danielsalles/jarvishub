const request = require('../services/issueRequest')
const insert = require('../elastic/insert')
const arrayPagination = require('../helper/arrayPagination')

const insertEach = array => array.forEach((value, index) => insert(value).then(r => console.log('Added issue in Elastic Search.')))

const execute = obj => request(obj)
                        .then(result => {
                          insertEach(result.data)

                          return arrayPagination(result.headers.link)
                        })
                        .then(result => result.forEach(value => request(obj, value).then(r => insertEach(r.data))))
                        .catch(e => console.error('Error collector', e))

module.exports = execute
