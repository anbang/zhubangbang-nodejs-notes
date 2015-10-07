# Nodejs入门介绍
node.js 安装网站:https://nodejs.org/en/

node.JS安装成功与否的检测方式；

- 在命令行里输入 node -v 即可检测node是否安装成功，如果是安装成功的，会返回版本号；
- 在命令行里输入 npm -v同理； nodejs会附带安装npm包的；

# node进入交互环境

命令行输入node，出现 [>] 就代表进入了node的交互环境（REPL）；

这是一个交互式环境，意思就是说在命令行里输入一条JavaScript语句后，马上会显示这条语句的执行结果；也可以执行已经写好的js文件；
**连续按两次ctrl+C 可以退出交互环境**；

# node的执行写好的JS文件
输入：console.log("Nodejs是上帝给我们的礼物!")

返回

- Nodejs是上帝给我们的礼物!
- undefined

nodejs执行写好的文件；
下面是写好的sum文件；

    >   function sum(){
    var flag=0;
    for(var i= 0,len=arguments.length;i<len;i++){
    var argNum=arguments[i];
    typeof argNum!=="number"?argNum=Number(argNum):void 0;
    !isNaN(argNum)?flag+=argNum:void 0;
    }
    return flag
    }
     var testNum=sum(1,2,3,5,67,87,89,9);
    console.log(testNum);
    
在命令行输入

    F:\node>node sum.js

返回结果是：263

如果能够成功运行上面2种方式，那么node就肯定安装成功了；

#webStrom的设置

推荐用WebStron开发JavaScript和nodejs；安装webstrom后可以简单的设置下字体；搜索font即可；个人喜欢字体Code pro这款字体；
 
在视图--工具栏--扳手进入设置，然后再node.js and NPM里设置；

这了会显示nodejs安装的路径；在这里点击configure按钮；可以下载nodejs的源代码包；这样以后带nodejs开发的过程中，就可以通过ctrl键和鼠标点击api随时查看源代码，来看工作的原理和流程；

在webstorm里可以通过右键直接运行js的文件，可以通过debug来设置断点来调试；

# node中的全局对象；

- 全局对象是global；（浏览器中的顶级是window；window是global的代理）
- `console.log(global);//可以通过console.log输出来；`

# global中哪些有用的信息

- 1、`__dirname`
- `console.log(__dirname);`//可以输出文件所在的绝对目录；f:\github\Nodejs-is-a-gift-from-God\nodejs入门介绍
- 2、`__filename`
- `console.log(__dirname);`//可以输出文件所在的绝对目录；f:\github\Nodejs-is-a-gift-from-God\nodejs入门介绍

- `console.log(__filename);`//可以输出文件所在绝对位置并且包裹自身的文件名；f:\github\Nodejs-is-a-gift-from-God\nodejs入门介绍\global.js

# node中全局对象console

console

- console.log() 输出日志
- console,dir() 输出详细日志
- console.info() 输出信息
- console.error() 输出错误
- console.warn() 输出警告
- console.time() 和timeEnd一起来获取某一段程序的执行时间
- console.timeEnd() 

webstorm在运行一个js文件后，如果再运行别的js文件，需要用右键来运行，如果点击下面的开始图标，会执行上一次执行的js文件，需要注意；

    console.log("this is a log");
    console.info("this is a info");
    console.error("this is a error");//红色的提示；
    console.warn("this is a warn");//红色的提示


    console.time("test");//需要传一个字符串
    for(var i=0;i<1000000;i++){}
    console.timeEnd("test");//需要传一个和上次一样的字符串
    /*输出3ms,表示运行了3ms*/

# node中全局对象 process;

	下面属于输出：    
	//process.stdout  -->standard output 标准的输出
    //process.stderr  -->standard error 标准的错误输出

    /*推荐用console来输出，这两个方法不如console好用*/
    process.stdout.write("this is process.stdout");
    process.stderr.write("this is process.stderr");//红色的
 