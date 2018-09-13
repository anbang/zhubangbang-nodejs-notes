const  fs= require ("fs");
fs.open('./da',function (err,info) {
    if (err){
        console.log(err)
    }
    console.log(info);
});