const client = require("../database")
const config = require("../config")
const { response } = require("express")

exports.getAllCustomers = (request,response)=>{
    client.db.select()
    .from('customers')
    .where({isDeleted : 0})
    .then((result)=>{
        response.status(200)
        .json({
            customers : result
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
}
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
exports.getTotalCustomers = (request,response)=>{
    client.db('customers').count('customer_id AS CNT')
    .then((total)=>{
        response.status(200)
        .json({
            count : total[0].CNT
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
}
exports.getTotalProducts = (request,response)=>{
    client.db('products').count('product_id AS CNT')
    .then((total)=>{
        response.status(200)
        .json({
            count : total[0].CNT
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
}
exports.getLatestProducts = (request, response)=>{
    client.db.select()
    .from('products')
    .orderBy('product_id','desc')
    .limit(4)
    .then((result)=>{
        response.status(200)
        .json({
            latest : result
        })
    }).catch((err)=>{
        response.status(500)
        .json({
            msg : err
        })
    })
}
exports.getLatestCustomers = (request, response)=>{
    client.db.select()
    .from('customers')
    .orderBy('customer_id','desc')
    .limit(4)
    .then((result)=>{
        response.status(200)
        .json({
            latest : result
        })
    }).catch((err)=>{
        response.status(500)
        .json({
            msg : err
        })
    })
}
exports.getAllCategories = (request,response)=>{
    client.db.select()
    .from('categories')
    .then((result)=>{
        response.status(200)
        .json({
            categories : result
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
}
exports.getTotalCategories = (request,response)=>{
    client.db('categories').count('category_id AS CNT')
    .then((total)=>{
        response.status(200)
        .json({
            count : total[0].CNT
        })
    }).catch((err)=>{
        response.status(500)
        .json('internal server error')
    })
    
}
exports.addProduct = (request,response)=>{
    const productName = request.body.productName
    const productDescription = request.body.productDescription
    const price = request.body.price
    const stock = request.body.stock
    const categoryID = request.body.categoryID
    const string = "alo"
    const productName1 = productName.replace(/^"(.*)"$/, '$1')
    const productDescription1 = productDescription.replace(/^"(.*)"$/, '$1')
    const price1 = price.replace(/^"(.*)"$/, '$1')
    const stock1 = stock.replace(/^"(.*)"$/, '$1')
    const categoryID1 = categoryID.replace(/^"(.*)"$/, '$1')
    parseInt(price1)
    parseInt(stock1)
    parseInt(categoryID1)
    // const PRICE = parseInt(JSON.stringify(price))
    // const STOCK =parseInt(JSON.stringify(stock))
    // const CATEGORYID = parseInt(JSON.stringify(categoryID))
    // console.log(PRICE,STOCK,CATEGORYID)
    
    console.log(request.body)
    console.log(price1,stock1,categoryID1)
    const imagePath = request.file.path.replace(/\\/g,"/")
    console.log(imagePath)
    client.db('products')
    .insert({image : imagePath,
             product_name : productName1,
              product_description : productDescription1,
            price : price1 ,
        stock : stock1,
    category_id : categoryID1
})
    .then((result)=>{
        response.status(200)
        .json({
            msg : 'product added and image stored success'
        })
    }).catch((err)=>{
        console.log(err)
        response.status(500)
        .json('internal server error')
    })
    
  }