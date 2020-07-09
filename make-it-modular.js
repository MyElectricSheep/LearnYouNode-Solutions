const filesFilteredByExtension = require('./mymodule')

const args = process.argv.slice(2)
const targetPath = args[0]
const extension = args[1]

filesFilteredByExtension(targetPath, extension, (err, files) => {
    if (err) return console.error(err)
    for (let file of files) console.log(file)
})

// Official solution

// mymodules.js //

//     'use strict'
//     const filterFn = require('./solution_filter.js')
//     const dir = process.argv[2]
//     const filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err) {
//         return console.error('There was an error:', err)
//       }

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

// make-it-modular.js //

//     'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }