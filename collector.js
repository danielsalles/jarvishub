require('dotenv').config()
const collectorExecute = require('./collectorOld')

const config = {
  owner: process.env.OWNER,
  repo: process.env.REPO,
  opt: {}
}

collectorExecute(config)
