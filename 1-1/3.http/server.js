var  http = require('http');
var fs = require('fs');
var mime = require('mime');
//创建一个http服务器         请求 响应
http.createServer(function(req,res){
    var url = req.url;
    var urls = url.split('?');
    var pathname = urls[0];
    var query = urls[1];
    if(pathname == '/hello'){
        res.end('hello baidu!!!!');
    }else{
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            var content = fs.readFileSync('.'+pathname);
            res.setHeader('Content-Type',mime.lookup(pathname));
            res.end(content);
        }else{
            res.end('404');
        }
    }


}).listen(8080);//在8080监听
