//声明http变量
var http = require('http');
var fs=require('fs');
var mime=require('mime');
http.createServer(function(request,response){
/*    console.log(request.url);//获取路径
    console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头*/
    var urls=request.url.split("?");
    var pathmame=urls[0];
    var query=urls[1];
    var name=query?query.split('=')[1]:"flag";
    getFile(request.url.slice(1),response);

    function getFile(filename,response){
        //只有指定了编码utf-8,data才会是一个字符串；
        fs.readFile(filename,'utf-8',function(err,data){
            if(data==null||err){
                response.end("file undefind")
            }else{
                response.writeHead(200,
                    {
                        'Content-Length':data.length,
                        'Content-Type':mime.lookup(filename)+';charset=UTF-8'
                    });
                data=data.replace('<%=name%>',name);
                response.write(data);
                response.end();
            }
        });
    }
}).listen(8088);//在对应的端口上实现监听