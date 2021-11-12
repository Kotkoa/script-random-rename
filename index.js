const fs = require('fs')
const path = require('path')

const srcFolder = `${path.resolve(__dirname, 'srcImg')}/`
const outFolder = `${path.resolve(__dirname, 'outImg')}/`

fs.readdir(srcFolder, (err, files) => {
  let stateOldName = ""
  let stateNewName = "" 

  files.forEach((file, id) => {
    let ext = path.extname(file)
    let name = path.basename(file, ext)

    if (name !== stateOldName) {
        let newName = Math.floor(Math.random()*90000) + 10000
      fs.rename(srcFolder + name + ext, outFolder + newName + ext, (err) => {
        if (err) throw err
        console.log(`rename of:${name + ext} completed!`)
      })
      stateOldName = name
      stateNewName = newName
    } else {
        fs.rename(srcFolder + name + ext, outFolder + stateNewName + ext, (err) => {
            if (err) throw err
            console.log(`rename of:${name + ext} completed!`)
          })
    }
  })
})
