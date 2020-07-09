// Write a program that performs an HTTP GET request to a URL provided to you
//   as the first command-line argument. Write the String contents of each
//   "data" event from the response to a new line on the console (stdout).

// https://joecreager.com/learnyounode-lesson-7-http-client/

const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
    res.on('data', (data) => {
        console.log(data.toString())
    })
    res.on('error', err => {
        console.log(err)
    })
})

// official solution
// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)