const express = require("express")
const categoryRoutes=express.Router()
const categoryController=require("../controllers/categoryController")
categoryRoutes.get('/selectCategory',categoryController.select)
module.exports= categoryRoutes