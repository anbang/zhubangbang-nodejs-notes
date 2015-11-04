var core=require('./core');
core.http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return res.end("404");//这里需要return，否则会继续往下走；
    }
    /*获取请求的相对路径*/
    /*假如访问的是/index.html;用slice(1)就可以把前面的[/]去掉，直接留下index.html*/
    var filename = req.url.slice(1);
    matchHeadler(filename, req, res);
}).listen(8080);

/*
 last-modified ：上次修改时间
 if-modified-since ：自从此时间过是否修改过
 * filename:文件名
 * req:请求
 * res:响应
 * */
function matchHeadler(filename, req, res) {
    var lastModified = new Date(req.headers["if-modified-since"]);//最后修改时间
    core.fs.stat(filename, function (err, stat) {
        //如果服务器上实体文件最后修改时间和if-modified-since时间相同
        if (lastModified.getTime() - stat.mtime.getTime()<=1000) {
            //上面的判断因为都是转成秒的，所以有可能不相等，需要做误差判断；
            res.statusCode = 304;
            res.end('');
        } else {
            //把最新的响应时间放在响应头中返回给响应提；
            res.setHeader('Last-Modified',stat.mtime.toGMTString());
            res.writeHead(200);
            core.fs.createReadStream(filename).pipe(res);//把文件的内容写入响应里
        }

    })
};

/**
 * last-modifed问题
 * 1. 不够精确，只能精确到秒
 * 2. 有时候文件修改过了，但内容未改，我们也希望用缓存
 * 3. cdn的问题 内容分发网络
 * @param filename
 * @param req
 * @param res
 */
function eTagHandler(filename,req,res){
    //etag:"3367624241" 内容ID号
    //if-none-match:"3367624241" 是否内容变化了
    //取出客户端缓存的tag值
    var nonMatch = req.headers['if-none-match'];
    //读取文件的内容
    core.fs.readFile(filename,function(err,content){
        var hash = getHash(content);
        if(nonMatch == hash){//如果文件内容和客户端传过来的摘要一样，内容未修改
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('etag',hash);//返回最新的etag
            res.writeHead(200);
            core.fs.createReadStream(filename).pipe(res);//把文件的内容写入响应里
        }
    });
}
// update 加密的内容  digest输出摘要 base64编码
function getHash(content){
    return core.crypto.createHash('sha1').update(content).digest('hex');
}