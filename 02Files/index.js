const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data)
})

fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Sample write data", (err) =>{
  if(err) throw err
  console.log("Write completed")

  fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nSample append data", (err) => {
    if (err) throw err
    console.log("Append completed")

    fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err) => {
      if (err) throw err
      console.log("Rename completed")
    })
  })
})

// exit on uncaught errors
process.on("uncaughtException", err =>{
  console.log(`There was an uncaught error: ${err}`)
  process.exit
})