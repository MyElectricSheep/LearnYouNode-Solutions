const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
const targetPath = args[0]
const extension = args[1]

fs.readdir(targetPath, (err, files) => {
    if (err) console.error(err)
    else for (let file of files) {
        if (path.extname(file).slice(1) === extension) console.log(file)
    }
})

// Official solution
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })