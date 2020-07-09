const { filterFilesByExtension } = require('./anotherMod2')
const fs = require('fs')

const args = process.argv.slice(2)
const targetPath = args[0]
const extensions = args[1]

filterFilesByExtension(targetPath, extensions, (err, files) => {
    if (err) return console.error(err)
    for (let file of files) {
        fs.readFile(`${targetPath}/${file}`, 'utf-8', (err, res) => {
            console.log(res)
        })
    }
})