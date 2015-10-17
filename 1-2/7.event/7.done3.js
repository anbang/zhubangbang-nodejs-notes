var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var user = {};
var count =0;
var e = new EventEmitter();
var done = function(key,value){
    user[key] = value;
    if(++count==2)
        console.dir(user);
}
e.on('name',done);
e.on('age',done);


fs.readFile('./name.txt','utf8',function(err,data){
    e.emit('name','name',data);
});
fs.readFile('./age.txt','utf8',function(err,data){
    e.emit('age','age',data);
});

