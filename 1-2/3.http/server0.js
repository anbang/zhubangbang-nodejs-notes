var http=require('http');
http.createServer(function(req,res){
    res.write('hello word  ');
    res.end('game over');
}).listen(8081);