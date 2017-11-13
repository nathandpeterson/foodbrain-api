const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controller.js')

router.get('/', ctrl.home)
router.get('/foods', ctrl.getAllFoods)
router.post('/foods', ctrl.createFood)
router.get('/foods/:id', ctrl.getOneFood)
router.put('/foods/:id', ctrl.updateFood)
router.delete('/foods/:id', ctrl.destroyFood)

module.exports = router
