const fs = require('fs');

var data = fs.readFileSync("./temp.txt", "utf-8");
fs.writeFileSync("./temp.txt", `${parseInt(data) + 1}`)