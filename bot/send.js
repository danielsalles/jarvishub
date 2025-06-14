const mountBody = require('../helper/mountBody')
const newComment = require('../services/newComments')
const llm = require('../services/llm')

const bot = async (elasticResponse, issue) => {
  const llmBody = await llm(issue, elasticResponse)
  const body = llmBody || mountBody(elasticResponse)
  return newComment(body, issue)
}

module.exports = bot
