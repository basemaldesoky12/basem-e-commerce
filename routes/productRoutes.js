const express = require("express")
const productRoutes=express.Router()
const productController = require("../controllers/productController")
productRoutes.get('/allProducts',productController.getAllProducts)
productRoutes.get('/selectproduct/:id',productController.selectOne)
module.exports = productRoutes