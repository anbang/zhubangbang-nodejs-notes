const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });
replServer.defineCommand('hello', {
    help: '打招呼',
    action(name) {
        // this.lineParser.reset();
        this.bufferedCommand = '';
        console.log(`你好，${name}！`);
        this.displayPrompt();//replServer.displayPrompt 方法主要被使用 replServer.defineCommand() 方法注册的命令的 action 函数调用。
    }
});
replServer.defineCommand('bye', function saybye() {
    console.log('再见！');
    this.close();
});
/*
* REPL中
* .help 查看
* */