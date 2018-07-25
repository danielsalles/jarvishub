const instanceHttp = require('./http')

const request = (obj, page) => instanceHttp.get(`/repos/${obj.owner}/${obj.repo}/issues?page=${page || 1}&state=all`, Object.assign({}, obj.opt))

module.exports = request
