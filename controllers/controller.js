const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).json({message: 'go to /foods for foods'})
}

function getAllFoods(req, res, next) {
  models.getAllFoods()
  .then(response => res.status(200).json(response))
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
  models.updateFood(req.params.id, req.body)
  .then(response => res.status(200).json(response))
}

function destroyFood(req, res, next) {
  models.destroyFood(req.params.id)
  .then(response => res.status(200).json(response))
}

module.exports = {home, getAllFoods, getOneFood, createFood, updateFood, destroyFood}
