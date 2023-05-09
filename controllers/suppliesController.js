const express = require("express");
const supplies = express.Router();

supplies.get("/", (req,res)=>{
    res.send("supplies works!")
})




module.exports = supplies