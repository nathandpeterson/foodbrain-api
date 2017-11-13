const path = require('path')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')

function getAllFoods() {
  return knex('foods')
}

function getOneFood(id){
  return knex('foods').where({id:id}).first()
}

function createFood(data){
  return knex('foods').insert(data)
}

function updateFood(id, data){
  return knex('foods')
  .update(data)
  .where({id:id})
  .returning('*')
}

function destroyFood(id){
  return knex('foods').where({id:id}).del()
}

module.exports = {getAllFoods, getOneFood, createFood, updateFood, destroyFood}
