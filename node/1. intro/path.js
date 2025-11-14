const path = require('path')

const fullPath = path.join('folder', 'subfolder', "file.txt")
const absolutePath = path.resolve('folder', 'subfolder', "file.txt")
const basePath = path.basename("./dir/abc/file.txt")
const extPath = path.extname("./dir/abc/file.txt")

console.log("fullPath", fullPath)
console.log("absolutePath", absolutePath)
console.log("basePath", basePath)
console.log("extPath", extPath)