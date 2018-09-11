const fs = require ('fs');
for (const key in fs){
    if(key.indexOf('Sync')<0){
        console.log(key);
    }
}
