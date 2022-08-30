const client = require("../database")
const config = require("../config")

exports.getAllProducts = (request,response)=>{
    client.db.select()
    .from('products')
    .then((result)=>{
        response.status(200)
        .json({
            products : result
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
}
    exports.selectOne = (request,response)=>
    {
        const id = request.params.id
        client.db.select()
        .from('products')
        .where({product_id : id })
        .then((result)=>{
            response.status(200)
            .json({
                product : result
            })
        }).catch((err)=>{
            console.log(err)
            response.status(500)
            .json('internal server error')
        })
    }

