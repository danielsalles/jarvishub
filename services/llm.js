const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const generateComment = async (issue, similarIssues) => {
  try {
    const titles = similarIssues.map(i => `- ${i._source.title} (${i._source.html_url})`).join('\n')
    const prompt = `You are a helpful assistant that summarizes GitHub issues. A user opened the following issue:\nTitle: ${issue.title}\nBody: ${issue.body}\nSimilar issues:\n${titles}\nWrite a short comment encouraging the user to check the similar issues.`

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })
    return completion.data.choices[0].message.content
  } catch (e) {
    console.error('LLM error', e.message)
    return null
  }
}

module.exports = generateComment
