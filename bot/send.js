const mountBody = require('../helper/mountBody')
const newComment = require('../services/newComments')

const bot = (elasticResponse, issue) => {
  return newComment(mountBody(elasticResponse), issue)
}

module.exports = bot
