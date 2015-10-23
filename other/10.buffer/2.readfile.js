var fs = require('fs');
/**
 * path 读取的文件路径
 *
 */
fs.readFile('msg.txt', function(err,data){
    if(err)
        console.error(err);
    else{
        //<Buffer 31 32 33 34 35>
        console.log(data);
    }
});