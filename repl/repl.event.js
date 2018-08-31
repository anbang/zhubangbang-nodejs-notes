const repl=require("repl");
const replServer=repl.start(">");
replServer.context.m = 'reset';//运行后，输入msg即可获取



replServer.on('exit', () => {
    console.log('从 REPL 接收到 "exit" 事件！');
    // console.log(replServer)//可以看看里面是啥
    process.exit();

});

replServer.on('SIGINT', () => {
    //这个是在console.log(replServer)中看到的
    console.log('从 REPL 接收到 "SIGINT" 事件！');
    // process.exit();
});

replServer.on('reset', (context) => {
    context.m = 'reset!';//这里可以写 clear后的事情；
    console.log('从 REPL 接收到 "reset" 事件！');
});
