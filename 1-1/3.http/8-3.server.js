var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    //menus=['炒菜1','炒菜2','炒菜3','饮料1','米饭1'];
    menus=[
        {name:'炒菜1',unit:'份'},
        {name:'炒菜2',unit:'份'},
        {name:'炒菜3',unit:'份'},
        {name:'米饭',unit:'碗'},
        {name:'饮料',unit:'瓶'},
        {name:'香烟',unit:'包'}
    ];
    var str="<ul>";
    menus.forEach(function(menu){
        //下面是错误的写法，这类变化的可以写在查询字符串里面的；就是URL里的？后面
        str+="<li>"+ "<a href='/"+menu.name+"' unit='"+menu.unit+"' >"+menu.name+"</a></li>";
    });
    str+="</ul>";
    response.setHeader("Content-Type","text/html;charset='UTF-8'");
    if(request.url=="/") {
        response.end(str)
    }else{
        response.end("客官，一"+request.unit+decodeURIComponent(request.url).slice(1)+"来了")
    }

}).listen(8080,'localhost',function(){
    console.log("server is star")
})