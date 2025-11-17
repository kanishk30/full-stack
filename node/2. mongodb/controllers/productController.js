const ProductModel = require("../models/product")

const createProduct = async (req, res) => {
    const body = req.body;

    const product = await ProductModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
    })
    console.log(product)

    return res.status(201).json({message: "Product created successfully."})
}

const getAllProducts = async (req, res) => {
    const allProdicts = await ProductModel.find({});
    console.log("allProdicts", allProdicts);
    return res.status(200).json(allProdicts)
}

const getProductByCategory = async (req, res) => {
    const product = await ProductModel.findById(req.params.id, req.body)
    return res.status(200).json(product)
}

const updateProductById = async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({message: "Product updated successfully"})
}

const deleteProductById = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id, req.body)
    return res.status(200).json(product)
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByCategory,
    updateProductById,
    deleteProductById
}