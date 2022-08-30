const express = require("express")
const orderRoutes=express.Router()
const orderController = require("../controllers/orderController")

orderRoutes.get('/placeorder/:id',orderController.placeOrder)
orderRoutes.delete('/deleteorder/:id',orderController.deleteOrder)
orderRoutes.get('/addDetails',orderController.insertInOrderDetails)
module.exports = orderRoutes