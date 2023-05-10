const express = require("express");
const supplies = express.Router();

const { getSupplies, getAllSupplies, createSupplies } = require("../queries/supplies");

// GET /supplies

supplies.get("/", async (req,res) => {
    const allSupplies = await getAllSupplies();
    res.send(allSupplies);
})

//READ  GET /supplies/one 

supplies.get("/:id", async (req, res) => {

    const {id} = req.params
    const supply = await getSupplies(id);



    if (supply.in_stock === true) {
        res.status(200).json(supply);

    } else if (supply.in_stock === false) {
        res.status(404).json({
            error: "item not found"
        })
    } else {
        res.status(500).json({
            error: "server error"
        })
    }
})

//CREATE POST /supplies

supplies.post("/", (req, res) => {
    const {name, brand, price, quantity, in_stock} = req.body;

    const newSupplies = createSupplies({name, brand, price, quantity, in_stock});

    res.status(201).json(newSupplies);

   
}
);









module.exports = supplies;