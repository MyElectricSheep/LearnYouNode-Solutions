// https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) console.error(err)
    else console.log(data.split('\n').length - 1)
})

// Official solution
// 'use strict'
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   const lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })