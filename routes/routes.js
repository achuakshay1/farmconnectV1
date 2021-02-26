const express = require('express')
const router = express.Router();

const commonController = require('../controllers/commonController')


const middleware = require('../middleware/authentication');

//router.get('/api/GetCustomers/',middleware.ensureToken,controller.getCustomer)
//router.post('/api/login',controller.login)

//router.get('/api/getNotes/:stateId', commonController.getNotes)
router.get('/api/getNotes', commonController.getNotes)


module.exports = router;