const express = require("express")
const mongoose = require("mongoose")

const dbUrl = "mongodb+srv://admin:admin@cluster0.js9m3xm.mongodb.net/?appName=Cluster0"

const app = express();

app.use(express.json())
mongoose.connect(dbUrl)
    .then((function(connection) {
        console.log("Connected to DB", connection)
    }))
    .catch(function(err) {
        console.log("Error in DB connection", err)
    })

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

// Created a product
app.post('/api/products', async (req, res) => {
    const body = req.body;

    const product = await ProductModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
    })
    console.log(product)

    return res.status(201).json({message: "Product created successfully."})
})

// GET products

app.get('/api/products', async (req, res) => {
    const allProdicts = await ProductModel.find({});
    console.log("allProdicts", allProdicts);
    return res.status(200).json(allProdicts)
})

// // get by Clothes category
// app.get('/api/products', async (req, res) => {
//     const allProdicts = await ProductModel.find({category: "Mobiles"});

//     console.log("allProdicts", allProdicts);
//     return res.status(200).json(allProdicts)
// })

// get product by ID

app.get('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findById(req.params.id, req.body)
    return res.status(200).json(product)
})

// update product by ID
app.put('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({message: "Product updated successfully"})
})

// delete product by id
app.delete('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id, req.body)
    return res.status(200).json(product)
})



app.listen(3000, () => {
    console.log("server running on 3000...")
})