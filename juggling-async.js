// https://joecreager.com/learnyounode-lesson-9-juggling-async/

const http = require("http");
const { BufferListStream } = require("bl");

const urls = process.argv.slice(2);

let result = [];
let counter = 0;

const fetchDataFromRemote = (url, index) => {
  http.get(url, (res) => {
    res.pipe(
      BufferListStream((err, data) => {
        const convertedData = data.toString();
        result[index] = convertedData;
        counter++;
        if (counter >= 3) {
          result.forEach((data) => console.log(data));
        }
      })
    );
  });
};

urls.forEach((url, index) => {
  fetchDataFromRemote(url, index);
});

// Official solution

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
