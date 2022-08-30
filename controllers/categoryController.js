const client = require("../database")
exports.select = async (request,response)=>{
    client.db.select("category_name")
    .from('categories')
    .then((result)=>{
        response.status(200)
        .json(result)
    }).catch(err=>{
        console.log(err)
    })
    
}