/**
 * 应用程序是进行类的对象实例
 * 在node.js里，process 对象代表node.js应用程序
 * 可以获取应用程序的用户，运行环境等各种信息
 */

///console.log(process);
/**
 *
 **/
//console.log('hello');
//process.stdout.write('hello');
// btn.addEventLister('click',function(){});
//当控制台接收到数据之后会调用回调函数进行处理
/*process.stdin.on('data',function(data){
    process.stdout.write(''+data);
});*/
/*
process.argv.forEach(function(item){
    console.log(item);
});
//当程序退出的时候进行清理工作
process.on('exit',function(){
    console.log('clear');
});*/
process.on('uncaughtException',function(err){
    console.log(err);
})


//try{
    //outer();
    //try{
        inner();
   // }catch(e){
   //     console.log(e);
   // }
//}catch(err){
//    console.log(err);
//}
//打印推栈并输出
//noMethod();

console.log('正常代码');