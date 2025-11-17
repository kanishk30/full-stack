const express = require("express")
const connectDb = require("./config/db")
const productRouter = require("./routes/productRoutes")
const app = express();

// connect to DB
connectDb()

// middleware
app.use(express.json())

// routes

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("Welcome to product APIs")
})

// const productSchema = new mongoose.Schema({
//     product_name: {
//         type: String,
//         required: true
//     },
//     product_price: {
//         type: Number,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     isInStock: {
//         type: Boolean,
//         required: true
//     },
// }, {timestamps: true}) // {timestamps: true} adds cfeatedAt, updatedAt by itself to each dicument.

// const ProductModel = mongoose.model("products", productSchema);

// // Created a product
// app.post('/api/products', async (req, res) => {
//     const body = req.body;

//     const product = await ProductModel.create({
//         product_name: body.product_name,
//         product_price: body.product_price,
//         category: body.category,
//         isInStock: body.isInStock,
//     })
//     console.log(product)

//     return res.status(201).json({message: "Product created successfully."})
// })

// // GET products

// app.get('/api/products', async (req, res) => {
//     const allProdicts = await ProductModel.find({});
//     console.log("allProdicts", allProdicts);
//     return res.status(200).json(allProdicts)
// })

// // // get by Clothes category
// // app.get('/api/products', async (req, res) => {
// //     const allProdicts = await ProductModel.find({category: "Mobiles"});

// //     console.log("allProdicts", allProdicts);
// //     return res.status(200).json(allProdicts)
// // })

// // get product by ID

// app.get('/api/products/:id', async (req, res) => {
//     const product = await ProductModel.findById(req.params.id, req.body)
//     return res.status(200).json(product)
// })

// // update product by ID
// app.put('/api/products/:id', async (req, res) => {
//     const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
//     return res.status(200).json({message: "Product updated successfully"})
// })

// // delete product by id
// app.delete('/api/products/:id', async (req, res) => {
//     const product = await ProductModel.findByIdAndDelete(req.params.id, req.body)
//     return res.status(200).json(product)
// })



app.listen(3000, () => {
    console.log("server running on 3000...")
})