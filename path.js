const Path = require('path')

console.log(Path.sep)

const filePath = Path.join('/content', 'subcontent', 'text.txt')
console.log(filePath)

const base = Path.basename(filePath)
console.log(base)


const absolute = Path.resolve(__dirname, 'content', 'subcontent', 'text.txt')
console.log(absolute)