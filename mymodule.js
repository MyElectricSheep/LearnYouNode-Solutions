// https://joecreager.com/learnyounode-lesson-6-make-it-modular/
const fs = require('fs')
const path = require('path')

const filesFilteredByExtension = (targetPath, extension, cb) => {
    fs.readdir(targetPath, (err, files) => {
        if (err) return cb(err)
        const filteredFiles = files.filter(file => path.extname(file).slice(1) === extension)
        return cb(null, filteredFiles)
    })

}

module.exports = filesFilteredByExtension

// Multi export
// module.exports.filesFilteredByExtension = filesFilteredByExtension

// Other way of doing multi exports
// module.exports = { filesFilteredByExtension }