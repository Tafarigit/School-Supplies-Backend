const express = require("express");
const supplies = express.Router();

const {
  getSupplies,
  getAllSupplies,
  createSupplies,
  deleteSupplies,
  updateSupplies
} = require("../queries/supplies");

// GET /supplies

supplies.get("/", async (req, res) => {
  const allSupplies = await getAllSupplies();
  res.send(allSupplies);
});

//READ  GET /supplies/one

supplies.get("/:id", async (req, res) => {
  const { id } = req.params;
  const supply = await getSupplies(id);

  if (!supply.error) {
    res.status(200).json(supply);
  } else if (supply.error.code === 0) {
    res.status(404).json({
      error: "item not found",
    });
  } else {
    res.status(500).json({
      error: "server error",
    });
  }
});

//CREATE POST /supplies

supplies.post("/", async (req, res) => {

try{
    const newSupplies =  await createSupplies(req.body);
    res.status(200).json(newSupplies);
}
catch(error){
    res.status(400).json({error: error});
}
   
}
);

//DELETE /supplies

supplies.delete("/:id", async (req,res) =>{
    const {id} = req.params;
    const deletedSupply = await deleteSupplies(id);
    if(deletedSupply.id){
        res.status(200).json(deletedSupply);
    }else{
        res.status(404).json("item not found")
    }
})

//EDIT /supplies

supplies.put("/:id", async (req,res)=>{
    const {id} = req.params;
    const {name, brand, price, quantity, description, in_stock} = req.body; 
    const updatedSupply = await updateSupplies(id, req.body);
    res.status(200).json(updatedSupply);
})

//add error message 

module.exports = supplies;
