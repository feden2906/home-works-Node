const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, 'task1', '18:00'), (err, files) => {
    files.forEach(file => {
        fs.readFile(path.join(__dirname, 'task1', '18:00', file), (err, data) => {
            const {gender} = JSON.parse(data);

            if (gender === 'male') {
                const oldPath = path.join(__dirname, 'task1', '18:00', file);
                const newPath = path.join(__dirname, 'task1', '20:00', file);
                fs.rename(oldPath, newPath, err1 => {
                    console.log(err1)
                })
            }
        })
    })
})

fs.readdir(path.join(__dirname, 'task1', '20:00'), (err, files) => {
    files.forEach(file => {
        fs.readFile(path.join(__dirname, 'task1', '20:00', file), (err, data) => {
            const {gender} = JSON.parse(data);

            if (gender === 'female') {
                const oldPath = path.join(__dirname, 'task1', '20:00', file);
                const newPath = path.join(__dirname, 'task1', '18:00', file);
                fs.rename(oldPath, newPath, err1 => {
                    console.log(err1)
                })
            }
        })
    })
})

