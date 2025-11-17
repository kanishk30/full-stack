const express = require("express");

const productRouter = express.Router()

const {
    createProduct,
    getAllProducts,
    getProductByCategory,
    updateProductById,
    deleteProductById
} = require("../controllers/productController")

productRouter.get('/', getAllProducts);
productRouter.get('/', getProductByCategory);
productRouter.post('/', createProduct);
productRouter.put('/:id', updateProductById);
productRouter.delete('/:id', deleteProductById);

module.exports = productRouter