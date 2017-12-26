let fs = require('fs');



/*fs.access(__dirname + '/json.js', (err) => {
    if (!err) {
        console.error(__dirname + '/json.js'+'存在');
    }

    fs.open(__dirname + '/json1.js', 'wx', (err, fd) => {
        if (err){
            console.log(err);
        }
        console.log(fd+"sssss");
    });
});*/


fs.mkdir(__dirname + '/test', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("dir is ok");
});


/*fs.fstat(__dirname + '/json.js', (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});*/

/*fs.lstat(__dirname + '/json.js', (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});*/


/*
fs.open(__dirname + '/json.js', 'r' , "0666", (err, fd) => {
    console.log(err,fd)});*/
