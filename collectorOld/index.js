const request = require('../services/issueRequest')

const execute = obj => request(obj)
                        .then(({ data }) => console.log('datinha aqui', data))

module.exports = execute
