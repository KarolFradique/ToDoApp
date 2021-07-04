const port = 3003

const bodyParce = require('body-parser')
const express = require ('express')
const server = express()
const AllowCors = require('./cors')


server.use(bodyParce.urlencoded({extended: true}))
server.use(bodyParce.json())
server.use(AllowCors)
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
