const axios = require('axios')
const FORK_API = 'http://food2fork.com/api/search?key=41c0da711b0b2069ecc098ca529c8482&q='

function get(searchTerm){
 return axios.get(`${FORK_API}${searchTerm}`)
    .then(results => results.data.recipes)
    .catch(error => console.log(' in the model....', error))
}


module.exports = {get}
