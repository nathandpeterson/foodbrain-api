// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: 'postgres://localhost/foodbrain_dev'
  },
  production: {
    client: 'postgresql',
    connection: ''
}
