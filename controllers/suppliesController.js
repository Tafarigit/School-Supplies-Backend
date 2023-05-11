const express = require("express");
const supplies = express.Router();

const {
  getSupplies,
  getAllSupplies,
  createSupplies,
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

supplies.put("/:index",(req,res)=>{
    const {index} = req.params;
    const supply = req.body; 
    
})


//update - PUT
//delete - DELETE

module.exports = supplies;
