const express = require('express')
const router = express.Router()
const agencycontroller = require('../api/controllers/agency.js')

router.post('/create-agency', agencycontroller.createagency) // this will create agency in single req
router.post('/create-agency-clients', agencycontroller.createboth) // this will create agency and client in single req
router.get('/getmax-bill', agencycontroller.getMaxBill)

module.exports = router
