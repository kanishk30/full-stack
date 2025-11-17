const mongoose = require("mongoose")

const dbUrl = "mongodb+srv://admin:admin@cluster0.js9m3xm.mongodb.net/?appName=Cluster0"


const connectDb = async () =>{
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to DB")
    } catch (err) {
         console.log("Error in DB connection", err)
    }
} 

module.exports = connectDb