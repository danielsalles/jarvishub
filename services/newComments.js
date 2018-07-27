const instanceHttp = require('./http')

const request = (body, issue) => instanceHttp.post(issue.comments_url, { body })

module.exports = request
