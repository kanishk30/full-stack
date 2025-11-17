const express = require('express')
const app = express();

const users = [{
    name: "john", age: 25, id: "1"
}, {
    name: "jill", age: 30, id: "2"
}]

// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from express")
})

app.get('/careers', (req, res) => {
    res.send("Hello from express, Im careers page.")
})

app.get('/help', (req, res) => {
    res.send("Hello from express, Im help page.")
})

app.get('/users', (req,res) => {
    res.status(200).json({message: "All users", users})
})

app.get('/users/:id', (req,res) => {
    const userid = req.params.id;
    console.log({userid})
    const user = users.find((user) => user.id === userid);
    console.log({user})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    res.status(200).json({message: "User found: ", user})
})


app.post("/data", (req, res) => {
    console.log("POST /data", req.body)
    res.send("Received a POST request")
})



app.listen(3000, () => {
    console.log("server running on 3000...")
})