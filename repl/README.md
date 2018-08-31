### REPL 交互式解释器 Read Eval Print Loop

“读取-求值-输出”循环（英语：Read-Eval-Print Loop，简称REPL）是一个简单的，交互式的编程环境。

这时我们就可以在 > 后输入简单的表达式，并按下回车键来计算结果。

在js文件中使用REPL

    const repl=require('repl');

> 原理：REPL导出了 `repl.REPLServer` 类，当 `repl.REPLServer`实力运行时，它接收用户输入的每一行，根据用户定义的解释函数解释这些输入，然后输出结果；输入的可以是`stdin` ，输出可以是`stdout` ，页可以是连接到其他任何的node流；
> `repl.REPLServer` 的实例支持输入时候的自动补全，Emacs风格的行编辑，多行输入，ANSI风格的输出，当前REPL会话状态的保存与恢复，错误校正，以及可定制的解释函数；

# 一、repl.start([options])

repl.start(<Object> | <string>) 方法,可以创建并启动一个  `repl.REPLServer` 实例。

对应的代码在  `./repl.start.js` 中；

如果 options 是一个字符串，则它指定了输入提示符：

    const repl = require('repl');
    // 一个 Unix 风格的提示符
    repl.start('$ ');

如果 options 是一个对象，是精细的设置，可以设置下列属性

    let options = {
        prompt: ">>>> ",//指定输入提示符
        // input: process.stdin,//REPL 输入要被读取的可读流。默认为 process.stdin
        // output: process.stdout,//REPL 输出要被写入的可写流。默认为 process.stdout
        // writer: "",//在写入到 output 之前，该函数被调用用来格式化每个命令的输出
        // terminal: "",//如果为 true，则指定 output 应被当作一个 TTY 终端，并且可以使用 ANSI/VT100 转义码写入
        // eval: "",//当解释每行输入时使用的函数,默认为 JavaScript eval() 函数的异步封装。 eval 函数出错时会返回 repl.Recoverable，表明输入不完整并提示用户完成输入。
        useColors: true,//true是开启ANSI 颜色风格,false是无颜色；假设输入数字`1`和字符串`"1"`颜色是不一样的
        // useGlobal: "",// 如果为 true，则指定默认的解释函数使用 JavaScript global 作为上下文，而不是为 REPL 实例创建一个新的独立的上下文
        ignoreUndefined: false,//如果为 true，则指定默认的输出器不会输出命令返回的 undefined 值。 默认为 false。
        // completer: "",//用来自定义 Tab 键的自动补全,详见 readline.InterfaceCompleter
        // replMode: "",//指定默认的解释器使用严格模式或默认（sloppy）模式来执行 JavaScript 命令
        breakEvalOnSigint: true//当接收到 SIGINT 时停止解释当前代码，比如按下 Ctrl+C。 不能与自定义的 eval 函数同时使用。 默认为 false
    };
    repl.start(options);


# 二、Node.js 的 REPL

Node.js 自身也使用 repl 模块为执行 JavaScript 代码提供交互接口。 可以通过不带任何参数（或使用 -i 参数）地执行 Node.js 二进制文件来使用它：

输入node命令即可进入REPL环境；

    $ node
    > 

### REPL 的历史记录

REPL的默认储存路径是`~/.node_repl_history` ，可以输入  `cat ~/.node_repl_history` 查看以前的记录

如果修改环境变量 ，设置为空字符串，`NODE_REPL_HISTORY=""` 会禁用REPL的记录，

不过这个没必要闲的蛋疼的去改环境变量，仅作了解，REPL相关的环境变量如下：

- NODE_REPL_HISTORY="path | '' "  一个有效的路径,如果是空字符串，则禁用 REPL 历史记录
- NODE_REPL_HISTORY_SIZE = 1000   默认为 1000。控制历史记录的最大行数。必须是正数。
- NODE_REPL_MODE             可以是 sloppy、strict , 默认是sloppy, 在sloppy模式下，允许代码在非严格模式下运行;


# 三、REPL的设计相关

### REPL中一些特殊命令(输入.help可以查看到)

    .break - 在输入一个多行表达式的过程中，输入 .break 命令（或按下 <ctrl>-C 组合键）将终止表达式的继续输入。
    .clear - 重置 REPL 的 context 为一个空对象，并清除当前正输入的所有多行表达式。
    .exit - 关闭输入输出流，退出 REPL。
    .help - 显示特定命令的帮助列表。
    .save - 保存当前 REPL 会话到一个文件： > .save ./file/to/save.js
    .load - 读取一个文件到当前 REPL 会话。 > .load ./file/to/load.js
    .editor 进入编辑模式（<ctrl>-D 完成，<ctrl>-C 取消）

### REPL 中下列按键组

    <ctrl>-C - 当按下一次时，与 .break 命令的效果一样。当在空白行按下两次时，与 .exit 命令的效果一样。
    <ctrl>-D - 与 .exit 命令的效果一样。
    <tab>    - 当在空白行按下时，显示全局和本地作用域内的变量。
               当在输入时按下，显示相关的自动补全选项。

> 默认的解释器提供了获取存在于全局作用域中的任何变量的途径。 可以通过给每个 REPLServer 绑定的 context 对象指定变量，来显式地把变量暴露给 REPL
    
    const repl=require("repl");
    const replTemp=repl.start(">");
    
    const msg='this is a  message';
    replTemp.context.msg = msg;//运行后，输入msg即可获取
    
默认情况下 context 的属性不是只读的。 要指定只读的全局变量，context 的属性必须使用 Object.defineProperty() 来定义:

    const repl = require('repl');
    const msg = 'message';
    
    const r = repl.start('> ');
    Object.defineProperty(r.context, 'm', {
      configurable: false,
      enumerable: true,
      value: msg
    });
    
    
> _（下划线）变量的赋值

默认的解释器会把最近一次解释的表达式的结果赋值给变量 _ （下划线）。 显式地设置 _ 为某个值能禁用该特性。


    > [ 'a', 'b', 'c' ]
    [ 'a', 'b', 'c' ]
    > _.length
    3
    > _ += 1
    Expression assignment to _ now disabled.
    4
    > 1 + 1
    2
    > _
    4


# 四、REPLServer 类

`repl.REPLServer` 类继承自 `readline.Interface` 类。 `repl.REPLServer` 的实例由 `repl.start()` 方法创建，不能直接使用 JavaScript 的 new 关键字创建。

- 'exit' 事件
- 'SIGINT' 事件
- 'reset' 事件
- replServer.defineCommand(keyword, cmd)
- replServer.displayPrompt([preserveCursor])
- replServer.clearBufferedCommand()

### Event事件

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

### replServer.defineCommand(keyword, cmd)

- keyword <string> 命令关键字（开头不带 . 字符）。
- cmd <Object> | <Function> 当命令被执行时调用的函数。

replServer.defineCommand() 方法用于添加新的前缀为 . 的命令到 REPL 实例。 这些命令通过输入一个 . 加 keyword 来调用。 

cmd 可以是一个函数或一个具有以下属性的对象：

- help <string> 当键入 .help 时显示的帮助说明（可选）。
- action <Function> 要执行的函数，可接受一个字符串参数。

代码参见  `defineCommand.js`

# 五、REPL的应用

> REPL用途：做DEMO演示使用,批量处理；

在构造时，通过在 `writer` 选项传入一个新的函数，可以完全地自定义一个 `repl.REPLServer` 实例的输出。 例子，把输入的任何文本转换为大写：


    const repl = require('repl');
    
    const r = repl.start({ prompt: '> ', eval: myEval, writer: myWriter });
    
    function myEval(cmd, context, filename, callback) {
      callback(null, cmd);
    }
    
    function myWriter(output) {
      return output.toUpperCase();
    }
    
