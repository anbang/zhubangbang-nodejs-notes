var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    var urlObj=url.parse(decodeURIComponent(request.url),true);
    menus=[
        {name:'炒菜',unit:'份'},
        {name:'炒菜',unit:'份'},
        {name:'炒菜',unit:'份'},
        {name:'米饭',unit:'碗'},
        {name:'饮料',unit:'瓶'},
        {name:'香烟',unit:'包'}
    ];
    var str="<ul>";
    menus.forEach(function(menu){
        str+="<li><a href='/"
        +menu.name+ "?unit="
        +menu.unit
        +"'>"+menu.name
        +"</a></li>";

    });
    str+="</ul>";
    response.setHeader("Content-Type","text/html;charset='UTF-8'");
    urlObj.query=urlObj.query||"";
    if(request.url=="/") {
        response.end(str)
    }else{
        console.log(str);
        response.end("客官，一"+urlObj.query.unit+urlObj.pathname.slice(1)+"来了")
    }

}).listen(8080,'localhost',function(){
    console.log("server is star")
})