const models = require('../models/models.js')

function home (req, res, next) {
  res.status(200).json({message: 'go to /foods for foods'})
}

function getAllFoods(req, res, next) {
  let data = models.getAllFoods()
  .then(response => res.status(200).json(response))
}


module.exports = {home, getAllFoods}
