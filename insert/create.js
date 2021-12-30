const express = require('express')
let mongodb = require('mongodb')

let mcl = mongodb.MongoClient
let router = express.Router()

let url = require("../url")
router.post("/",(req,res)=>{
    var p_id = req.body.p_id
    var p_name = req.body.p_name
    var p_cost = req.body.p_cost

    var obj = {
        "p_id" : p_id,
        "p_name" : p_name,
        "p_cost" : p_cost,
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedb")
            db.collection("products").insertOne(obj,(err,array)=>{
                if(err)
                    res.json({"insert":"failed"})
                else{
                    console.log("Data Inserted")
                    res.json({"insert":"success"})
                }
            })
        }
    })
})

//export module
module.exports = router
