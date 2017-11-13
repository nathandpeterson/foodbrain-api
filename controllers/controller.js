const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).send({message: 'go to /foods for foods'})
}

function getAllFoods(req, res, next) {
  let data = models.getAllFoods()
  res.status(200).json(data)
}


module.exports = {home, getAllFoods}
