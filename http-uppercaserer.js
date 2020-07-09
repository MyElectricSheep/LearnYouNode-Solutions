// https://itnext.io/how-to-handle-the-post-request-body-in-node-js-without-using-a-framework-cd2038b93190
// https://joecreager.com/learnyounode-lesson-12-http-uppercase/

const http = require('http')

const [port] = process.argv.slice(2);

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString().toUpperCase(); // convert Buffer to string
        });
        req.on('end', () => {
            res.end(body);
        });
    }
})

server.listen(parseInt(port, 10), () => {
    console.log(`server listening on port ${port}`)
})

// Official solution

// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))