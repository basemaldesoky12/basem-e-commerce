const express = require("express")
const authRoutes = express.Router()
const authController = require("../controllers/authController")
authRoutes.post('/login',authController.customerLogin)
authRoutes.post('/adminLogin',authController.adminLogin)
module.exports = authRoutes