const lastPage = link => link.match(/page=(\w+)\&state=all>; rel="last"/)[1]

const createArray = lastPage => [...Array(parseInt(lastPage))].map((v, i) => i+1).splice(1, lastPage)

module.exports = link => createArray(lastPage(link))
