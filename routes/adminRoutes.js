const express = require("express")
const adminRoutes = express.Router()
const adminController = require("../controllers/adminController")
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, './frontEnd/src/assets/images')
},
filename: (req, file, cb) =>{
console.log(file)
cb(null, Date.now() + file.originalname)
}
}) 
const upload = multer({storage: storage})
adminRoutes.get('/getAllCustomers',adminController.getAllCustomers)
adminRoutes.get('/getAllProducts',adminController.getAllProducts)
adminRoutes.get('/getTotalCustomers',adminController.getTotalCustomers)
adminRoutes.get('/getTotalProducts',adminController.getTotalProducts)
adminRoutes.get('/getLatestCustomers',adminController.getLatestCustomers)
adminRoutes.get('/getLatestProducts',adminController.getLatestProducts)
adminRoutes.get('/getAllCategories',adminController.getAllCategories)
adminRoutes.get('/getTotalCategories',adminController.getTotalCategories)
adminRoutes.post('/addProduct',upload.single('image'),adminController.addProduct)
module.exports = adminRoutes
