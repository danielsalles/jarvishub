const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: process.env.ELASTIC_SEARCH_HOST,
})

module.exports = client
