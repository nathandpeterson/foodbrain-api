const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controller.js')

router.get('/foods', ctrl.getAllFoods)
router.post('/foods', ctrl.createFood)
router.get('/foods/:id', ctrl.getOneFood)
router.put('/foods/:id', ctrl.updateFood)
router.delete('/foods/:id', ctrl.destroyFood)
router.get('/recipes', ctrl.getAllRecipes)
router.post('/recipes', ctrl.createRecipe)
router.get('/recipes/:id', ctrl.getOneRecipe)
router.put('recipes/:id', ctrl.updateRecipe)
router.put('/recipes', ctrl.searchFood)
router.delete('recipes/:id', ctrl.destroyRecipe)

module.exports = router
