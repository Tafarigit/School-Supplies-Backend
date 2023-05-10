const db = require("../db/dbConfig.js");

const getAllSupplies = async () => {
    try {
        const allSupplies = await db.any("SELECT * FROM supplies");
        return allSupplies;
    } catch (err) {
        return err;
    }
}

const getSupplies = async (id) => {
    try {
    const oneSupply = await db.one("SELECT * FROM supplies WHERE id=$1", id);
    return oneSupply;
} catch (error) {
    return { error: error };

}
}

const createSupplies = async (supply) => {
    try {
        const newSupply = await db.one(
            "INSERT INTO supplies (name, brand, price, quantity, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [supply.name, supply.brand, supply.price, supply.quantity, supply.in_stock]
        );
        return newSupply;
    } catch (error) {
        return { error: error };
    }
}

module.exports = { getAllSupplies, getSupplies, createSupplies };
