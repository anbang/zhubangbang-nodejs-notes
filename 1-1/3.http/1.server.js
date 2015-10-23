//声明http变量
var http = require('http');
var fs=require('fs');
http.createServer(function(request,response){
    console.log(request.url);//获取路径
    console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头
    fs.readFileSync();
    response.end();//结束响应 挂掉电话
}).listen(8080);//在对应的端口上实现监听