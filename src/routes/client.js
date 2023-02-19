const express = require('express')
const router = express.Router()
const clientController = require('../api/controllers/client.js')

router.post('/updateclient', clientController.updateclientByID)
router.post('/createclient', clientController.createclient)

module.exports = router
