/**
 * cookie 是web服务器向浏览器发送的一段ASCII文本
 * 客户端一旦收到cookie,浏览器会很开心的保存在本地 key=value
 * 以后每次客户端向服务器发请求，都需要把之前发给它的cookie发回给服务器
 *
 */
/**
 * 设置cookie的时候还需要设置一些额外的参数
 *  Set-Cookie: name=zfpx; path=/foo; domain=.baidu.com;
 *  Key=Value
 *    名称值对。这个是必须的
 *  path
 *    控制访问哪些路径可以发送cookie.
 *  domain
 *    指定cookie会发送到哪个域名下面
 *  expires
 *  max-age
 *    指定cookie的失效时间，如果没有指定失效时间，那么cookie不会写入硬盘，只持续到会话结束(浏览器关闭)
 *  httpOnly
 *    不能在js里操作cookie
 *
 * @type {exports|module.exports}
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
        response.writeHead(200,{'Content-Type':'text/html',"Set-Cookie":["name=zfpx","age=6"]});
        //response.setHeader("Set-Cookie","name=zfpx; path=/a");
        //response.setHeader("Set-Cookie","name=zfpx; domain=b.zfpx.cn");
        //response.setHeader("Set-Cookie","name=zfpx; Expires="+new Date(new Date().getTime()+3600*1000).toGMTString());
        //response.setHeader("Set-Cookie","name=zfpx; Max-Age=20");
        //response.setHeader("Set-Cookie","name=zfpx; HttpOnly");
        response.end('hello');
    }else{//读cookie
        // name=zfpx; age=6; hobby=smoking
        // name=zfpx&age=6
        var cookie = request.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        response.setHeader('Content-Type',"text/html;charset=utf-8");
        if(cookieObj.name){
            response.end('欢迎你老朋友');
        }else{
            response.end('欢迎你新朋友');
        }
    }
}).listen(8080);

