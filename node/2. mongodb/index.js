const express = require('express')
const app = express()

const loggerMiddleware = (req,res, next) => {
    console.log(new Date(), req.method, req.url );
    next()
}

app.use(loggerMiddleware)

// built-in mddleware to serve static files. so, index.html can be accessed at localhost:3000/index.html
app.use(express.static('public'));

app.get('/special', loggerMiddleware, (req,res) => {
    res.send("This is special route wth logs")
})

app.listen(3000, () => {
    console.log("server running on 3000...")
})