//声明http变量
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var server = http.createServer();
server.on('lele',function(){

});
server.on('request',function(request,response){
    if( request.url == '/ajax'){
        response.setHeader('Access-Control-Allow-Origin',"*");
        response.end('This is ajax File');
    }else{
        response.end(fs.readFileSync('index2.html'));//结束响应 挂掉电话
    }
});
server.listen(8080);//在对应的端口上实现监听


fs.readFileSync('index2.html','UTF-8') //按照UTF-8读取index2.html