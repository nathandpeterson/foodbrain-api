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

function searchFood(ingredient){
  let promises = [knex('foods').where({name: ingredient.name}), knex('ingredients')]
  return knex('foods')
    .join('ingredients', 'foods.name', 'ingredients.name')
    .select('ingredients.id')
}

function getAllRecipes(){
  return knex('recipes')
}

function createRecipe(data){
  return knex('recipes').insert(data).returning('*')
}

function getOneRecipe(searchID){
  const promises = [knex('recipes').where({id : searchID}).first(),
  knex('ingredients'), knex('ingredient_recipe').where({recipe_id: searchID})]
  return Promise.all(promises)
    .then(dataForOneRecipe => {
      [recipe, ingredients, ingredientRecipeJoin] = dataForOneRecipe
      recipe.ingredients = []
      ingredientRecipeJoin.forEach(ingredient => {
        recipe.ingredients.push(ingredient)
        let ingredientNameData = ingredients.find(ingredientName => ingredientName.id === ingredient.ingredient_id)
        ingredient.name = ingredientNameData.name
      })
      return recipe
    })
}

function updateRecipe(id, data){
  return knex('recipes')
  .update(data)
  .where({id:id})
  .returning('*')
}

function destroyRecipe(id){
  return knex('ingredient_recipe').where({recipe_id:id}).del()
    .then(res => {
      return knex('recipes').where({id:id}).del()
    })
}

function createIngredient(data){
  return knex('ingredients').where({name: data.ingredient.name})
    .then(result => {
      if(!result.length) {
        return knex('ingredients').insert({name:data.ingredient.name}).returning('*')
          .then(addedIngredient => {
            return knex('ingredient_recipe').insert({recipe_id: data.id, ingredient_id: addedIngredient[0].id, quantity: data.ingredient.quantity}, '*')
          })
      } else {
        return knex('ingredient_recipe').insert({recipe_id: data.id, ingredient_id: result[0].id, quantity: data.ingredient.quantity}, '*')
      }
    })
}

function getPerishable(){
  return knex('foods').where({perishable : true}, '*')
}

function searchForIngredients(recipeIngredients){
  let promises = []
  recipeIngredients.forEach(ingredient => {
    let promise = knex('foods').where({name : ingredient.name})
    promises.push(promise)
  })
  return Promise.all(promises)
    .then(results => {
      let matches = results.filter(result => {
        if(result.length) return result
      })
      matches.forEach(match => {
        let ingredientData = recipeIngredients.find(ingredient => ingredient.name === match[0].name)
        match[0].id = ingredientData.id
      })
      return matches
    })
}

module.exports = {getAllFoods, sortBy, getOneFood, createFood, updateFood, destroyFood, getAllRecipes, createRecipe, getOneRecipe, updateRecipe, destroyRecipe, searchFood, createIngredient, getPerishable, searchForIngredients}
