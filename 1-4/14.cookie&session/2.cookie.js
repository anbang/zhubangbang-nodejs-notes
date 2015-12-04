/**
  1.一旦服务器向客户端发了cookie,以后除非 cookie过期，否则 浏览器每次都会向服务器发cookie
  2.存放在客户端，容易被篡改
  -------------------------------
 1.不要存储私密数据
 2.正确的设置path domain 以减少cookie的发送
 3. 正确的设置httpOnly防止cookie被篡改
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(request,response){
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if('/favicon.ico' == pathname){
        return response.end('404');
    }else if(pathname == '/write'){//写cookie
        response.writeHead(200,{'Content-Type':'text/html',"Set-Cookie":["name=zfpx","isAdmin=0"]});
        //response.setHeader("Set-Cookie","name=zfpx; path=/a");
        //response.setHeader("Set-Cookie","name=zfpx; domain=b.zfpx.cn");
        //response.setHeader("Set-Cookie","name=zfpx; Expires="+new Date(new Date().getTime()+3600*1000).toGMTString());
        //response.setHeader("Set-Cookie","name=zfpx; Max-Age=20");
        //response.setHeader("Set-Cookie","name=zfpx; HttpOnly");
        response.end('hello');
    }else{//读cookie
        // name=zfpx; age=6; hobby=smoking
        // name=zfpx&age=6
        //document.cookie="isAdmin=1"
        var cookie = request.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        response.setHeader('Content-Type',"text/html;charset=utf-8");
        if(cookieObj.name){
            var isAdmin = cookieObj.isAdmin==1?"管理员":"普通用户";
            response.end('欢迎你老朋友,你是'+isAdmin);
        }else{
            response.end('欢迎你新朋友');
        }
    }
}).listen(8080);

