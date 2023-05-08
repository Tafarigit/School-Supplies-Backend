const express = require("express");
const app = express()

// const cors = require("cors");


app.get("/", (req, res) => {
    res.send("Welcome to the G.O. Store")
})





module.exports = app;