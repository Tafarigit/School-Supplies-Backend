DROP DATABASE IF EXISTS supplies_dev;
CREATE DATABASE supplies_dev; 

\c supplies_dev; 
CREATE TABLE supplies (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    image_url TEXT, 
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    quantity INTEGER CHECK (quantity>0 AND quantity <= 100),
    description TEXT, 
    in_stock BOOLEAN DEFAULT FALSE
);



