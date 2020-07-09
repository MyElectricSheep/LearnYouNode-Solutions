// https://joecreager.com/learnyounode-lesson-8-http-collect/

// const http = require('http')

// const url = process.argv[2]
// let result = ''

// http.get(url, (res) => {
//     res.setEncoding('utf8')
//     res.on('data', (data) => result += data)
//     res.on('end', () => {
//         console.log(result.length)
//         console.log(result)
//     })
//     res.on('error', err => {
//         console.log(err)
//     })
// })

// Other solution (using BL)

const { BufferListStream } = require('bl')
const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
    res.pipe(BufferListStream((err, data) => {
        const result = data.toString()
        console.log(result.length)
        console.log(result)
    }))
})


// Official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })