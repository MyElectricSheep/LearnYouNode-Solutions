const fs = require('fs')
const path = require('path')

const filterFilesByExtension = (targetPath, extension, callback) => {
    fs.readdir(targetPath, (err, files) => {
        if (err) callback(err)
        const filteredFiles = files.filter(file => path.extname(file).slice(1) === extension)
        callback(null, filteredFiles)
    })
}

module.exports = { filterFilesByExtension }