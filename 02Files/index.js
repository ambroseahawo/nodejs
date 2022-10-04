const fs = require("fs")

fs.readFile("./starter.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data)
})