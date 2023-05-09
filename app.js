const express = require("express");
const app = express()
const suppliesController = require("./controllers/suppliesController")

// const cors = require("cors");

app.get("/", (req, res) => {
    res.send("Welcome to the G.O. Store")
})

app.use("/supplies", suppliesController)





//supplies 
//supplies controller 
// 





module.exports = app;