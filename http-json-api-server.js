const http = require('http');
const url = require('url')
const querystring = require('query-string');
const luxon = require('luxon')
let DateTime = luxon.DateTime;

const [port] = process.argv.slice(2);

const formatTime = (type, t) => {
    if (type === 'unix') return { unixtime: t.toMillis() }
    if (type === 'parse') return {
        hour: parseInt(t.toFormat('HH'), 10),
        minute: parseInt(t.toFormat('mm'), 10),
        second: parseInt(t.toFormat('ss'), 10)
    }
}

const server = http.createServer((req, res) => {
    const { search, pathname } = url.parse(req.url)
    const qs = querystring.parse(search)
    const t = DateTime.fromISO(qs.iso);

    if (pathname === '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(formatTime('parse', t)))
    }

    if (pathname === '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(formatTime('unix', t)))
    }

})

server.listen(parseInt(port), () => {
    console.log(`server listening on port ${port}`)
})

// Official solution
// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))