const path = require('path')
const env = process.env.NODE_ENV || 'development'
const db = path.join(__dirname, '..', 'db', `${env}.json`)
const knex = require('../db/db.js')
const sorter = require('./sorter.js')

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

const sortBy = {
  perishable() {
    return knex('foods').where({perishable: true})
  },
  new(){
    return knex('*').from('foods').orderBy('created_at', 'desc')
  },
  old(){
    return knex('*').from('foods').orderBy('created_at', 'asc')
  },
  categories(){
    return knex('foods')
      .then(response => sorter.categories(response))
  }
}

function getAllRecipes(){
  return knex('recipes')
}

function createRecipe(data){
  return knex('recipes').insert(data)
}

function getOneRecipe(id){
  return knex('recipes').where({id:id}).first()
}

function updateRecipe(id, data){
  return knex('recipes')
  .update(data)
  .where({id:id})
  .returning('*')
}

function destroyRecipe(id){
  return knex(recipes).where({id:id}).del()
}

module.exports = {getAllFoods, sortBy, getOneFood, createFood, updateFood, destroyFood, getAllRecipes, createRecipe, getOneRecipe, updateRecipe, destroyRecipe}
