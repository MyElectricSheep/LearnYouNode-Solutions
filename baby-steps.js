let arguments = process.argv.slice(2)

// solution 1
console.log(arguments.reduce((acc, num) => acc + parseInt(num, 10), 0))

// solution 2
// let solution = 0
// for (let num of arguments) {
//     solution = solution + parseInt(num, 10)
// }

// console.log(solution)

// official solution
// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)