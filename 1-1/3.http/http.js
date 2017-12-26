var http = require("http");
var fs = require('fs');
var mime = require("mime");

var hostName = 'localhost',
    port = 8082;

var server = http.createServer(serverFn);
server.listen(port, hostName, function (e) {
    console.log("server.listen")
});

function serverFn(req, res) {
    var url = req.url;
    if (url == '/') {
        res.statusCode = 200;
        res.setHeader("name", "zhuzhuzhuzu");
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        fs.readFile('./index.html', function (err, data) {
            res.write(data); 
            res.end();
        })
    } else {
        static(url, res)
    }
    // console.log(req.method, req.url);
    // console.log(req.headers);
}


function static(url, res) {
    res.setHeader("Content-Type", "text/css;charset=utf-8");
    fs.readFile(url, function (err, data) {
        res.write(data);
        res.end();
    })
}