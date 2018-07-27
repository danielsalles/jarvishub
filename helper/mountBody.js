const reduceSimilars = obj => obj.reduce((acc, current) => {
  acc += `- [${current._source.title}](${current._source.html_url}) \n`

  return acc
}, '')

const body = obj => `# JarvisHub
JarvisHub helps you find similar issues. If any of these below answers your question, please close the issue.

## Similar

 ${reduceSimilars(obj)}



Thanks.`

module.exports = body
