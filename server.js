//import modules
var express = require("express")
var bodyparser = require("body-parser")
var cors = require("cors")
//create rest object
var app = express()

//set JSON as MIME type
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

//enable cors
app.use(cors())

//import fetch module
var fetch = require("./fetch/fetch")
var insert = require("./insert/create")
var update = require("./update/update")
var remove = require("./delete/delete")
//use fetch module
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remove)

//create a port
let port = process.env.PORT || 8080
//assign port number
app.listen(port,()=>{
    console.log("Server listening port number", port)
})

/*
http://localhost:8080/fetch
http://localhost:8080/insert
http://localhost:8080/update
http://localhost:8080/delete
*/