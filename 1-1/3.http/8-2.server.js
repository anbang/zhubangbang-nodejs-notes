var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    menus=['炒菜1','炒菜2','炒菜3','饮料1','米饭1'];
    var str="<ul>";
    menus.forEach(function(menu){
        str+="<li>"+ "<a href='/"+menu+"'>"+menu+"</a></li>";

    });
    str+="</ul>";
    response.setHeader("Content-Type","text/html;charset='UTF-8'");
    if(request.url=="/") {
        response.end(str)
    }else{
        response.end("客官，一份"+decodeURIComponent(request.url).slice(1)+"来了")
    }

}).listen(8080,'localhost',function(){
    console.log("server is star")
})