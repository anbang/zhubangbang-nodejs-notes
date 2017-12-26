let fs = require('fs');

// console.log(__dirname);  //文件的所在目录
// console.log(__filename); //文件的绝对路径

fs.mkdir(__dirname + '/test', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("dir is ok");
});

fs.readdir(__dirname + '/test', (err,info) => {
    if (err) {
        console.error(err);
    }
    console.log("info",info);
});

/*fs.rmdir(__dirname + '/test', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("dir is rm");
});*/
