const models = require('../models/models.js')
const ideas = require('../models/ideas.js')

function getAllFoods(req, res, next) {
  if(req.body.sortBy) {
    models.sortBy[req.body.sortBy]()
    .then(response => res.status(200).json(response))
  } else {
    models.getAllFoods()
    .then(response => res.status(200).json(response))
  }
}

function getOneFood(req, res, next) {
  models.getOneFood(req.params.id)
  .then(response => res.status(200).json(response))
}

function createFood(req, res, next) {
  models.createFood(req.body)
  .then(response => res.status(201).json(response))
}

function updateFood(req, res, next){
  console.log(req.body)
  models.updateFood(req.params.id, req.body)
  .then(response => res.status(200).json(response))
}

function destroyFood(req, res, next) {
  models.destroyFood(req.params.id)
    .then(response => res.status(200).json(response))
}

function searchFood(req, res, next) {
  models.searchFood(req.body)
    .then(response => {
      res.status(200).json(response)
    })
}

function getAllRecipes(req, res, next) {
  models.getAllRecipes()
    .then(response => res.status(200).json(response))
}

function createRecipe(req, res, next) {
  models.createRecipe(req.body)
    .then(response => res.status(201).json(response))
}

function getOneRecipe(req, res, next) {
  models.getOneRecipe(req.params.id)
    .then(response => res.status(200).json(response))
}

function updateRecipe(req, res, next){
  models.updateRecipe(req.params.id, req.body)
    .then(response => res.status(201).json(response))
}

function destroyRecipe(req, res, next){
  models.destroyRecipe(req.params.id)
    .then(response => res.status(200).json(response))
}

function createIngredient(req, res, next){
  models.createIngredient(req.body)
    .then(response => res.status(200).json(response))
}

function getIdeas(req, res, next){
  ideas.get(req.params.search)
    .then(response => {
     res.status(200).json(response)
  })
}

function getPerishable(req, res, next){
  models.getPerishable()
    .then(res => {
      res.status(200).json(response)
    })
}

module.exports = {getAllFoods, getOneFood, createFood, updateFood, destroyFood, getAllRecipes, getOneRecipe, createRecipe, updateRecipe, destroyRecipe, searchFood, createIngredient, getIdeas, getPerishable}
