const express = require('express')
let mongodb = require('mongodb')

let mcl = mongodb.MongoClient
let router = express.Router()

let url = require("../url")
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedb")
            db.collection("products").find().toArray((err,array)=>{
                if(err)
                    throw err
                else{
                    console.log("Data sent")
                    res.json(array)
                }
            })
        }
    })
})

//export module
module.exports = router
