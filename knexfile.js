const path = require('path')


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/foodbrain_dev'
  },
  production: {
    client: 'pg',
    connection: 'postgres://bxjqjnjfwisrce:54394741e329575c4c2cd80e2270569e17f9d5d60423fc4e5af07618eeaa4165@ec2-50-16-199-246.compute-1.amazonaws.com:5432/d5mvd9be0dmb9e'
  },
  migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
}
