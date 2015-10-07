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

推荐用WebStron开发JavaScript和nodejs；安装webstrom后可以简单的设置下字体；搜索font即可；

在视图--工具栏--扳手进入设置，然后再node.js and NPM里设置；

这了会显示nodejs安装的路径；在这里点击configure按钮；可以下载nodejs的源代码包；这样以后带nodejs开发的过程中，就可以通过ctrl键和鼠标点击api随时查看源代码，来看工作的原理和流程；