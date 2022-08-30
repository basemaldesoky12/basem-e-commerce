const client = require("../database")
const bcrypt = require("bcrypt")
const config = require("../config")
const jwt = require("jsonwebtoken")
const { response } = require("express")
exports.customerLogin = (request,response)=>{
    const email = request.body.email
    const password = request.body.password

    client.db.select('password')
    .from('customers')
    .where({customer_email : email})
    .then((result)=>{
        console.log(result, " dddfdf")
        const isPasswordValid=bcrypt.compareSync(
        password+config.pepper,result[0].password
        )
        if(isPasswordValid)
        {
            client.db.select('customer_id','customer_email','customer_first_name','customer_last_name','address','postcode','city','phone')
            .where({customer_email : email})
            .from('customers')
            .then((result)=>{
                console.log("result")
                const token = jwt.sign({
                    id : result[0].customer_id,
                    firstName : result[0].customer_first_name,
                    lastName : result[0].customer_last_name,
                    email : result[0].email,
                    address : result[0].address,
                    city : result[0].city,
                    phone : result[0].phone,
                    postcode : result[0].postcode,
                },`${config.secret}`,{
                    expiresIn : '14d'
                })
                response.header('auth-token', token)
                .status(200)
                .json({
                  token: token
                })
            }).catch((err)=>{
                console.log(`lool ${err}`)
            })
        }
        else{
            console.log("kjkhdhf")
        }
    }).catch((err)=>{
        console.log(`hahaha ${err}`)
    })
}
exports.adminLogin = (request, response)=>{
    const email = request.body.email
    const password = request.body.password

    client.db.select('password')
    .from('admin')
    .where({email : email})
    .then((result)=>{
        console.log(result)
        let isPasswordValid=false
        if(password == result[0].password)
        {
            isPasswordValid=true
        }
        if(isPasswordValid)
        {
            client.db.select('admin_id','email')
            .where({email : email})
            .from('admin')
            .then((result)=>{
                const token = jwt.sign({
                    id : result[0].customer_id,
                    email : result[0].email,
                    
                },`${config.secret}`,{
                    expiresIn : '14d'
                })
                response.header('auth-token', token)
                .status(200)
                .json({
                  token: token
                })
            }).catch((err)=>{
                console.log(`lool ${err}`)
            })
        }
    }).catch((err)=>{
        console.log(`hahaha ${err}`)
    })
}