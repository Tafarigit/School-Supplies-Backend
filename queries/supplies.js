const db = require("../db/dbConfig.js");

const getAllSupplies = async () => {
    try {
        const allSupplies = await db.any('SELECT * FROM supplies');
        return allSupplies;
    } catch (err) {
        return err;
    }
}

const getSupplies = async (id) => {
    try {
    const oneSupply = await db.one('SELECT * FROM supplies WHERE id=$1', id);
    return oneSupply;
} catch (error) {
    return { error: error };

}
}

const createSupplies = async (supply) => {
    try {
        const newSupply = await db.one(
            'INSERT INTO supplies (name, brand, image_url, price, quantity, description, in_stock) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [supply.name, supply.brand, supply.image_url, supply.price, supply.quantity, supply.description, supply.in_stock]
        );
        console.log(newSupply)
        return newSupply;
    } catch (error) {
        throw { error: error };
    }
}

const deleteSupplies = async(id) => {
    try {
      const deletedSupply = await db.one(
        "DELETE FROM supplies WHERE id=$1 RETURNING *",
        id);
        return deletedSupply;
    }catch(error){
      return {error: error};
    }
  }

const updateSupplies = async (id, supply) => {
    try {
        const updatedSupply = await db.one(
            'UPDATE supplies SET name=$1, brand=$2, image_url=$3, price=$4, quantity=$5,description=$6,in_stock=$7 where id=$8 RETURNING *',
            [supply.name, supply.brand, supply.image_url, supply.price, supply.quantity, supply.description, supply.in_stock, id]
        );
        return updatedSupply;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSupplies, getSupplies, createSupplies, deleteSupplies, updateSupplies};
