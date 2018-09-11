const fs = require("fs");
const psth="./dir.js";

fs.watchFile(psth , { persistent: true, interval: 600 } , (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
    if(curr.mtime!==prev.mtime){
        console.log("文件被修改啦")
    }
});