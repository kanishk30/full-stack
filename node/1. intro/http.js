const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.write("Hello from http!")
    res.end()
})

const server2 = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello HTML</h1>")
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log("Server is running on 3000")
})

