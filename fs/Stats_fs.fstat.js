const fs = require("fs");
const psth="./dir.js";

fs.stat(psth,function(err,stats) {
    if(err){
        console.error(err);
        return
    }
    console.log(stats);
});

fs.open(psth, 'a', function(err, fd) {
    if (err) {
        throw err;
    }
    console.log(fd);
    fs.fstat(fd, function(err, stats) {
        if (err) {
            throw err;
        }
        console.log(stats);
    });
});