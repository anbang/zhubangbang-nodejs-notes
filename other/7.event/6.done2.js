var fs = require('fs');
var user = {};
var count =0;
var done = function(key,value){
    user[key] = value;
    if(++count==2)
        console.dir(user);
}

fs.readFile('./name.txt','utf8',function(err,data){
    done('name',data);
});
fs.readFile('./age.txt','utf8',function(err,data){
    done('age',data);
});

