var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    menus=['炒菜1','炒菜2','炒菜3'];
    var str="<ul>";
    menus.forEach(function(menu){
        str+="<li>"+ "<a href='/"+menu+"'>"+menu+"</a></li>";

    });
    str+="</ul>";
    if(request.url=="/") {
        response.setHeader("Content-Type","text/html;charset='UTF-8'");//不写的话会是字符串，而不作为HTML来解析；
        response.end(str)
    }else if(decodeURIComponent(request.url)=="/炒菜1"){
        response.end("11111")
    }else if(decodeURIComponent(request.url)=="/炒菜2"){
        response.end("222")
    }else if(decodeURIComponent(request.url)=="/炒菜3"){
        response.end("333")
    }

}).listen(8080,'localhost',function(){
    console.log("server is star")
})