import { createReadStream, createWriteStream } from "fs";

import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt"); // import.meta.dirname is same as __dirname
const outputFilePath = path.join(import.meta.dirname, "output.txt"); // import.meta.dirname is same as __dirname

const readableStream = createReadStream(inputFilePath, {
  encoding: "utf-8",
  highWaterMark: 16,
});
const writableStream = createWriteStream(outputFilePath);

// events emitter

readableStream.on("data", (chunk) => {
  console.log("Next Chunk: ", chunk);
  console.log("Length: ", chunk.length);
  writableStream.write(chunk);
});

// readableStream.pipe(writableStream);

readableStream.on("end", () => {
  writableStream.end();
  console.log("streaming complete.");
});
