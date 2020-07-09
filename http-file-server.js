// https://joecreager.com/learnyounode-lesson-11-http-file-server/

const http = require('http')
const fs = require('fs');

const [port, pathToFile] = process.argv.slice(2);

const server = http.createServer((req, res) => {
    res.writeHead(200);
    fs.createReadStream(pathToFile).pipe(res)
    res.on('end', () => {
        res.end()
    })
})

server.listen(parseInt(port, 10), () => {
    console.log(`Server listening on port ${port}`)
})


// Official solution

// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))