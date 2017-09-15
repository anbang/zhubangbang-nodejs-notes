/**
   全局对象
    global的根本作用是全局变量的宿主
    global的属性都可以直接被全局使用。
 **/


/*

全局变量的声明方法，
    1，global的属性；
    2，不加var直接写的变量

    */

/*引用方法，可以用

    console.log(global.a);
    console.log(a)

    */
global.a = 1;
//console.log(global);//window
b = 3;

//永远使用var来声明对象；避免全局污染
//在模块内部声明的变量属性，不属于全面变量，var声明的属于模块本身；不属于全局；

var a = 1;
console.log(global===global.global);//true,global上会有一个global；


//with 方法的使用,下面就可以输出obj的name和age；
var obj={name:"objname",age:8};
with (obj){
    console.log(name);
    console.log(age);
}

/*
 * __filename 当前文件的绝对路径,带文件名的
 * __dirname 当前文件的相对路径
 * 他们两个都是方法的参数，不是全局对象；
 * */
console.log(__filename);
console.log(__dirname);


/**
 * process 进程对象；有以下的属性
 *   argv 命令行参数
 *   env.path 获取环境变量的值；(环境变量是在win系统的高级系统设置里面设置的；)
 *
 * chdir//修改当前目录
 * cwd//当前目录,和dirname不一样，cwd是可以修改的；
 *
 *   pid: 5308,
 *  kill: [Function],
 *
 *  stdout: [Getter],标准输出
 *  stderr: [Getter],错误输出,颜色是红色的
 *  stdin: [Getter],标准输入,接收用户输入
 *
 * memoryUsage:监控内存的时候用的；
 * exit ;退出程序
 *
 *  nextTick: [Function: nextTick],在事件循环的下一个循环中调用callback函数；比setTimeout效率高，是在所有同步方法执行完成之后执行此回调；
 *  nextTick队列会在完全执行完才调用IO操作；因此提柜的nextTick就像一个while（true）的死循环，阻止任何的IO；
 *
 *  setImmediate: [Function],setImmediate是在下一个周期调用，但是nexttick级别高；
 *  clearImmediate: [Function],
 *  同步代码>nextTick>setImmediate>定时器之类的异步代码
 *
 *  console: [Getter],
 */

//读取命令行参数
process.argv.forEach(function(arg){
    console.log(arg);
});

console.log(process.pid);
var count = 0;
setInterval(function(){
    console.log(count);
    if(count++ == 10){
        process.exit();
    }
},1000)

/*
process.on('SIGTERM',function(){
    process.exit();
})
*/
