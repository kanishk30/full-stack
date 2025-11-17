const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
}, {timestamps: true}) // {timestamps: true} adds cfeatedAt, updatedAt by itself to each dicument.

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel