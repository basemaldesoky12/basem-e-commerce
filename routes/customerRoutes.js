const express = require("express")
const customerRoutes=express.Router()
const customerController = require("../controllers/customerController")
// customerRoutes.get('/allCustomers',customerController.getAllCustomers)
customerRoutes.post('/addCustomer',customerController.addCustomer)
customerRoutes.put('/editCustomer/:id',customerController.editCustomer)
customerRoutes.delete('/deletecustomer/:id',customerController.deleteCustomer)
customerRoutes.get('/selectone/:id',customerController.selectOne)
module.exports = customerRoutes