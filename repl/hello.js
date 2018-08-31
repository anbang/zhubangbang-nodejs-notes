const repl=require("repl");
// const replTemp=repl.start(">");
// const msg='this is a  message';
// replTemp.context.msg = msg;//运行后，输入msg即可获取

function myEval(cmd, context, filename, callback) {
    callback(null, cmd);
}

function myWriter(output) {
    return output.toUpperCase();
}

const r = repl.start({ prompt: '> ', eval: myEval, writer: myWriter });






// console.log(repl);
//repl内的东西
/*
const replObj={
    writer: {
        // [Function: inspect]
    colors: {
        bold: [Object],
        italic: [Object],
        underline: [Object],
        inverse: [Object],
        white: [Object],
        grey: [Object],
        black: [Object],
        blue: [Object],
        cyan: [Object],
        green: [Object],
        magenta: [Object],
        red: [Object],
        yellow: [Object] },
    styles: {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        symbol: 'green',
        date: 'magenta',
        regexp: 'red' } },
    _builtinLibs: [
        'assert',
        'buffer',
        'child_process',
        'cluster',
        'crypto',
        'dgram',
        'dns',
        'domain',
        'events',
        'fs',
        'http',
        'https',
        'net',
        'os',
        'path',
        'punycode',
        'querystring',
        'readline',
        'repl',
        'stream',
        'string_decoder',
        'tls',
        'tty',
        'url',
        'util',
        'v8',
        'vm',
        'zlib' ],

    // REPLServer: {
    //     [Function: REPLServer]
    //     super_: { [Function: Interface] super_: [Object] }
    //     },
    // REPL_MODE_SLOPPY: Symbol(repl-sloppy),
    // REPL_MODE_STRICT: Symbol(repl-strict),
    // REPL_MODE_MAGIC: Symbol(repl-magic),
    // start: [Function]
};*/
