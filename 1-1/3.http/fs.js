var fs = require('fs');
console.log("+++++++++++star");
//同步
var content = fs.readFileSync('index.html');
console.log(content.toString());

console.log("+++++++++++midel");

//异步
fs.readFile('index.html',function(err,content){
    console.log(content.toString());
});

console.log("+++++++++++end");




