const client = require("../database")
const bcrypt = require("bcrypt")
const config = require("../config")
const Joi = require('joi')
const { response } = require("../app")
const hashPassword = (password)=>{
    const salt = parseInt(config.salt)
    return bcrypt.hashSync(`${password}${config.pepper}`,salt)
}

exports.addCustomer= (request,response)=>{
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
    const phone = request.body.phone
    const city = request.body.city
    const address = request.body.address
    const postCode = request.body.postCode
    const customerSchema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5),
        firstName : Joi.string(),
        lastName : Joi.string(),
        phone : Joi.string(),
        city : Joi.string(),
        address : Joi.string(),
        postCode : Joi.string(),
    })
    const result = customerSchema.validate(request.body)
    if(result.error)
        {
            response.status(400)
            .send(result.error.details[0].message)
        }
        // client.db.select()
        // .from('customers')
        // .where({customer_email : email})
        // .then((resultedCustomer)=>{
        //     if(resultedCustomer[0].length>0)
        //     {
        //         response.status(400)
        //     .json({
        //         status: 'error',
        //         msg: 'email is already registered'
        //     })
        //     }
        // })
        
    client.db('customers')
          .insert({customer_email : email,
            customer_first_name : firstName,
            customer_last_name : lastName,
            password : hashPassword(password),
            address : address ,
            postcode : postCode,
            phone : phone,
        city : city }
                  )
            .then((result)=>{
                response.status(200)
                .json({
                    msg : 'created',
                    result : result
                })
            }).catch((err)=>{
                response.status(500)
                .json(`${err}`)
                console.log(err)
            })
}
exports.editCustomer = (request,response)=>{

    const customerID= request.params.id
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
    const phone = request.body.phone
    const city = request.body.city
    const address = request.body.address
    const postCode = request.body.postCode

    client.db('customers')
    .where({customer_id : customerID})
    .update({customer_email : email,
        customer_first_name : firstName,
        customer_last_name : lastName,
        password : hashPassword(password),
        address : address ,
        postcode : postCode,
        phone : phone,
    city : city })
    .then((data)=>{
        if(data.affectedRows != 0)
        response.status(200)
        .json('updated')
    }).catch((err)=>{
        console.log(err)
        response.status(500)
        .json('internal server error')
    })
}
 exports.deleteCustomer = (request,response)=>{
    const id = request.params.id
    console.log('ay haga')
    client.db('customers')
    .update({isDeleted : 1})
    .where({customer_id : id })
    .then(()=>{
        response.status(200)
        .json('deleted')
    }).catch((err)=>{
        console.log(err)
        response.status(500)
        .json('internal server error')
    })
 }
 exports.selectOne = (request,response)=>{
    const id = request.params.id
    client.db.select()
    .from('customers')
    .where({customer_id : id })
    .then((result)=>{
        response.status(200)
        .json({
            customer : result
        })
    }).catch((err)=>{
        console.log(err)
        response.status(500)
        .json('internal server error')
    })
 }
