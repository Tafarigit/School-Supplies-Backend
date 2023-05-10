const express = require("express");
const supplies = express.Router();

supplies.get("/", (req,res)=>{
    res.send("supplies works!")
})

supplies.put("/:index",(req,res)=>{
    const {index} = req.params;
    const supply = req.body; 
    
})

//create - 
//read (+show one) 
//update - PUT
//delete - DELETE





module.exports = supplies