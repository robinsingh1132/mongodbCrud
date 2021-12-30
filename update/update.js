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
        "p_name" : p_name,
        "p_cost" : p_cost,
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedb")
            db.collection("products").updateOne({"p_id":p_id},{$set:obj},(err,array)=>{
                if(err)
                    res.json({"update":"failed"})
                else{
                    console.log("Data Updated")
                    res.json({"update":"success"})
                }
            })
        }
    })
})

//export module
module.exports = router
