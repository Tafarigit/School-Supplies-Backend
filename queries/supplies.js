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
            'INSERT INTO supplies (name, brand, price, quantity, description, in_stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [supply.name, supply.brand, supply.price, supply.quantity,supply.description, supply.in_stock]
        );
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
            'UPDATE supplies SET name=$1, brand=$2, price=$3, quantity=$4,description=$5,in_stock=$6 where id=$7 RETURNING *',
            [supply.name, supply.brand, supply.price, supply.quantity, supply.description, supply.in_stock, id]
        );
        return updatedSupply;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSupplies, getSupplies, createSupplies, deleteSupplies, updateSupplies};
