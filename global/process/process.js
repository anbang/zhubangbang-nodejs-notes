//process.stdout  -->standard output 标准的输出
//process.stderr  -->standard error 标准的错误输出

/*下面属于输出*/
process.stdout.write("this is process.stdout");
process.stderr.write("this is process.stderr");//红色的
/*推荐用console来输出，这两个方法不如console好用*/

/*下面是键盘输入*/
process.stdin.setEncoding('utf-8');//纯文本输入只需要设置utf8即可，不需要设置gbk之类的；这里和网页不一样的；
/*第一种输入方式设置*/

process.stdin.on("data",function(data){
    console.log(data);

/*运行后，没有反应，而是出于等待状态，如果再里面输入，会显示绿色的字；回车后会打印出来*/
});
/*第二种输入方式*/
/*process.stdin.on("readable",function(){
    var data=process.stdin.read();
    console.log(data);
});*/
/*process.on("exit",function(){
    console.log("this process.on exit");
});*/
