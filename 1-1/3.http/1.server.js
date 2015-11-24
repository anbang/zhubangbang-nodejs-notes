//声明http变量
var http = require('http');
var fs=require('fs');
http.createServer(function(request,response){
/*    console.log(request.url);//获取路径
    console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头
    浏览器只能发起get请求，发表不了post请求；
    */
    getFile(request.url.slice(1),response);

    function getFile(filename,response){
        fs.readFile(filename,function(err,data){
            if(data==null||err){
                response.end("file undefind")
            }else{
                response.writeHead(200,
                    {
/*
                        'Content-Length':data.length,
*/
                        'Content-Type':getContentType(filename)+';charset="UTF-8"'
                    });
                response.write(data);
                response.end();
            }
        });
    }
    function getContentType(filename){
        if(filename.indexOf('.html')!=-1){//此处不能用filename.indexOf('.html')；
            return 'text/html'
        }else if(filename.indexOf('.css')!=-1){
            return 'text/css '
        }else if(filename.indexOf('.js')!=-1){
            return 'text/javascript '
        }
    }
}).listen(8080);//在对应的端口上实现监听

/*
* 1、导入包；
* 2、创建断口监听；http.createServer(function(request,response){}.listen;
* 3、开一个函数处理请求和想要；getFile(request.url.slice(1),response);
* 4、创建一个读取文件；fs.readFile(filename,function(err,data){};
* */

/*请求
* 1、基于http协议、get/post的请求方法名、url请求路径；
* 2、请求首部；
*       Connection:keep-alive 保持连接；相当于保持连接不中断；
*       content-Type  : 是一种额外的要求；比如吃饭，要多放辣椒，少放醋，这类额外要求；
*       Content-Length  : 请求的长度；Content-Length:19   name=broszhu&&age=6;请求的长度也会影响采取何种请求方式；
* */