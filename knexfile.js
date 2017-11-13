const path = require('path')


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/foodbrain_dev'
  },
  production: {
    client: 'pg',
    connection: ''
  },
  migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
}
