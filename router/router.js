const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controller.js')

router.get('/', ctrl.home)
router.get('/foods', ctrl.getAllFoods)

module.exports = router
