const repl = require("repl");


// 一、参数是 String，则它指定了输入提示符
// repl.start('$ ');//一个 Unix 风格的提示符

// 二、Object
let options = {
    prompt: ">>>> ",//指定输入提示符
    // input: process.stdin,//REPL 输入要被读取的可读流。默认为 process.stdin
    // output: process.stdout,//REPL 输出要被写入的可写流。默认为 process.stdout
    // writer: "",//在写入到 output 之前，该函数被调用用来格式化每个命令的输出
    // terminal: "",//如果为 true，则指定 output 应被当作一个 TTY 终端，并且可以使用 ANSI/VT100 转义码写入
    // eval: "",//当解释每行输入时使用的函数,默认为 JavaScript eval() 函数的异步封装。 eval 函数出错时会返回 repl.Recoverable，表明输入不完整并提示用户完成输入。
    useColors: true,//true是开启ANSI 颜色风格,false是无颜色；假设输入数字`1`和字符串`"1"`颜色是不一样的
    // useGlobal: "",// 如果为 true，则指定默认的解释函数使用 JavaScript global 作为上下文，而不是为 REPL 实例创建一个新的独立的上下文
    ignoreUndefined: true,//如果为 true，则指定默认的输出器不会输出命令返回的 undefined 值。 默认为 false。 比如输入 const a=2;
    // completer: "",//用来自定义 Tab 键的自动补全,详见 readline.InterfaceCompleter
    // replMode: "",//指定默认的解释器使用严格模式strict 或默认（sloppy）模式来执行 JavaScript 命令
    breakEvalOnSigint: true//当接收到 SIGINT 时停止解释当前代码，比如按下 Ctrl+C。 不能与自定义的 eval 函数同时使用。 默认为 false
};
repl.start(options);

// repl.start({
//     prompt: 'Node.js 使用 stdin> ',
//     input: process.stdin,
//     output: process.stdout
// });