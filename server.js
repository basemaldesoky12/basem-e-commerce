const port = 3003
const http = require("http")
const app = require("./app")
const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})