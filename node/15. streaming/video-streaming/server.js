const http = require("http");
const fs = require("fs");
const path = require("path");

const VIDEO_PATH = path.join(__dirname, "video.mp4");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync("index.html");
    return res.end(html);
  }

  if (req.url === "/video") {
    const readVideoStream = fs.createReadStream(VIDEO_PATH);
    const stat = fs.statSync(VIDEO_PATH);
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-length": stat.size,
    });

    readVideoStream.on("data", (chunk) => {
      console.log("Buffer chunk: ", chunk);
    });

    readVideoStream.pipe(res); //
  }
});

server.listen(8001, () => {
  console.log("Server started successfully.");
});
