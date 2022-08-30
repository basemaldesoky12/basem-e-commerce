const config = require("./config")
exports.db= require("knex")({
    client : 'mysql',
    connection : {
        host : config.host,
        port : config.port,
        user : config.user,
        password : config.password,
        database : config.database
    }
})