const fs = require('fs')

const targetPath = process.argv[2]

const fileContent = fs.readFileSync(targetPath, 'utf8')

console.log(fileContent.split('\n').length - 1)