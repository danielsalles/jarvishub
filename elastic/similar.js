const client = require('./instance')

const similar = obj => client.search({
                        index: 'github',
                        body: {
                          query: {
                            more_like_this : {
                              fields : ['title', 'body'],
                                like : [ obj.title, obj.body],
                                min_term_freq : 1,
                                max_query_terms : 25
                            }
                          }
                        }
                      })
                      .catch(e => console.error('Elastic Search Error', e))

module.exports = similar
