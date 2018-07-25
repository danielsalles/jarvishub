const axios = require('axios')

const axiosRetry = require('axios-retry')

const instance = axios.create({
	baseURL: 'https://api.github.com/',
	timeout: 15000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
		'Authorization': `token ${process.env.TOKEN_GITHUB}`
  }
})

axiosRetry(instance, { retries: 3 })

module.exports = instance
