const path = require('path')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')

function getAllFoods() {
  return knex('foods')
}


module.exports = {getAllFoods}
