var fs = require("fs");

var buffer = fs.readFileSync("us-state.txt");
var bufferString = buffer.toString();

var newLineCount = bufferString.split("\n").length

console.log("there are " + newLineCount + "lines in the file");
console.log("oh you finished reading the file");