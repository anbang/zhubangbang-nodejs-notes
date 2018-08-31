const repl = require('repl');

const googleTranslate = require('google-translate')("apiKey");//填写apiKey

const myEval = async (cmd, context, filename, callback) => {
    googleTranslate.translate(cmd, 'zh', function(err, translation) {
        if(err){
            console.error(err);
            return;
        }
        callback(null, translation);
    });
};
repl.start({ prompt: '> ', eval: myEval });