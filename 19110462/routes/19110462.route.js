const express = require('express')
const router = express.Router()

const controller_19110462 = require('../controllers/19110462.controller')

router.get('/:id', controller_19110462.get)

router.post('/', controller_19110462.post)

module.exports = router