const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

// method 1. callbacks
// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data)
// })

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Sample write data", (err) => {
//   if (err) throw err
//   console.log("Write completed")

//   fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nSample append data", (err) => {
//     if (err) throw err
//     console.log("Append completed")

//     fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err) => {
//       if (err) throw err
//       console.log("Rename completed")
//     })
//   })
// })

// method 2. async wait
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8")
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"))
    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
    await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nAppend data")
    await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "newPromiseWrite.txt"))
    const newData = await fsPromises.readFile(path.join(__dirname, "files", "newPromiseWrite.txt"), "utf8")
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
}

fileOps()

// exit on uncaught errors
process.on("uncaughtException", err => {
  console.log(`There was an uncaught error: ${err}`)
  process.exit
})