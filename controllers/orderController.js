const client = require("../database")
const config = require("../config")
const { request, response } = require("../app")

exports.placeOrder = (request,response)=>{
    const customerID = request.params.id
    const orderNo = Math.floor((Math.random() * 10000000) + 1);
    client.db('orders')
    .insert({
        order_no : orderNo,
        customer_id : customerID
    })
    .then((result)=>{
        response.status(200)
        .json({
            msg : 'order placed',
            result : result
        })
    }).catch((err)=>{
        response.status(500)
        .json(`${err}`)
        console.log(err)
    })
}
exports.deleteOrder = (request,response)=>{
    const id = request.params.id
    client.db('orders')
    .update({isDeleted : 1})
    .where({order_id : id })
    .then(()=>{
        response.status(200)
        .json('order deleted')
    }).catch((err)=>{
        console.log(err)
        response.status(500)
        .json('internal server error')
    })
}
exports.insertInOrderDetails = (request,response)=>{
    const pid = request.param('pid')
    const orderID = request.param('orderid')
    const quantity = request.param('quantity')
    const subtotal = request.param('subtotal')
    client.db('order_details')
    .insert({product_id : pid,
    order_id : orderID,
product_qty : quantity,
subtotal : subtotal})
.then((result)=>{
    response.status(200)
    .json('order details added')
    client.db.select('stock')
    .from('products')
    .where({product_id : pid})
    .then((resultedStock)=>{
        console.log('selected')
       client.db('products')
       .update({
        stock : resultedStock[0].stock-quantity
       })
       .where({product_id : pid})
       .then(()=>{
        console.log('updated')
       }).catch((error)=>{
        console.log('cannot update',error)
       })
    }).catch((error)=>{
        console.log('cannot perform select')
    })
}).catch((err)=>{
    console.log(err)
    response.status(500)
    .json('internal server error')
})

}