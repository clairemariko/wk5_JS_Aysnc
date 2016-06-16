var fs = require("fs");

fs.readFile("us-state.txt", "utf-8", function(err, data){
  if(err){
    console.log("uh oh");
  }
  else{
    var bufferString = data;
  }

  var newLineCount = bufferString.split("\n").length;
  console.log("there are" + newLineCount + "ine in the file")
  ;
});

console.log("oh where has oregon gone? She gone to oklahoma")
//so it goes to fs.readFile and goes ok i will get the text and i need a callback, so off it trots to do the callback requirements but while that is happening console.log can print the text