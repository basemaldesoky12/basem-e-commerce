const express = require("express")
const app = express()
const categoryRoutes= require("./routes/categoryRoutes")
const customerRoutes = require("./routes/customerRoutes")
const authRoutes =  require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const adminRoutes = require("./routes/adminRoutes")
const orderRoutes = require("./routes/orderRoutes")
const cors = require('cors')
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('./frontEnd/src/assets/images', express.static( "images" ) );
app.use(cors())

app.use(express.json())
app.use("/api/categories",categoryRoutes)
app.use("/api/customers",customerRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/order",orderRoutes)
module.exports= app