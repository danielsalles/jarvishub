const instanceHttp = require('./http')

const request = obj => instanceHttp.get(`/repos/${obj.owner}/${obj.repo}/issues`, Object.assign({}, obj.opt))

module.exports = request
