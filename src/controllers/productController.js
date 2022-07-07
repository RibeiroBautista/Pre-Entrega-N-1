const Container = require("../container");
const contenedorProducts = new Container("./src/db/products.json", "./src/db/productIds.json", "./src/db/deletedProducts.json");
contenedorProducts.init("Productos");
require('dotenv').config();

const getAllProducts = ( req, res ) => {
    res.json(contenedorProducts.getAll());
}

const getProductById = async( req, res ) => {
    if (req.params.id){
        return res.json(contenedorProducts.getById(Number(req.params.id)));
    } else{
        const productos = contenedorProducts.products;
        const admin = process.env.ADMIN
        await res.render('home.ejs', {productos, admin})
    }
    
}

const postProduct = async ( req, res ) => {
    await res.redirect('/api/productos')
    await res.status(201).render
    contenedorProducts.save(req.body)
}

const putProduct = async ( req, res ) => {
    res.json(await contenedorProducts.saveById(Number(req.params.id), req.body));
}

const deleteProductById = async ( req, res ) => {
    res.json(await contenedorProducts.deleteById(Number(req.params.id)));
}

module.exports = {contenedorProducts, getAllProducts, getProductById, postProduct, putProduct, deleteProductById}