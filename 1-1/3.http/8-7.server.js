var http=require('http');
var url=require('url');
var fs=require('fs');
var mime=require('mime');
http.createServer(server).listen(8080,'localhost',function(){
    console.log("server is star")
});
function server(request,response){
    var urlObj=url.parse(decodeURIComponent(request.url),true);
    menus=[
        {name:'鸡肉',unit:'份'},
        {name:'鱼肉',unit:'份'},
        {name:'鸭肉',unit:'份'},
        {name:'米饭',unit:'碗'},
        {name:'饮料',unit:'瓶'},
        {name:'香烟',unit:'包'}
    ];
    var str="<ul>";
    menus.forEach(function(menu){
        str+="<li><a href='/flag/"
        +menu.name+ "?unit="
        +menu.unit
        +"'>"+menu.name
        +"</a></li>";

    });
    str+="</ul>";
    response.setHeader("Content-Type","text/html;charset='UTF-8'");
    if(request.url=="/") {
        var content=fs.readFileSync("8menu.html","UTF-8");
        content=content.replace("broszhu",str);
        response.end(content)
    }else if(urlObj.pathname.indexOf('/flag/')==0){
        response.end("客官，一"+urlObj.query.unit+urlObj.pathname.slice(6)+"来了")
    }else if(urlObj.pathname=="/ajax"){
        response.end(new Date().toUTCString());
    } else{
        var filename=request.url.slice(1);
        response.setHeader("Content-Type",mime.lookup(filename));
        var content=fs.readFileSync(filename,"UTF-8");
        response.end(content)
    }

}
