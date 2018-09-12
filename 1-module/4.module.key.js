console.log(`***********Start*************`);
/*module的key*/
for (const key in module){
    console.log(`${key} ====>`);
    console.log(module[key]);
}
console.log(`***********End*************`);

module.exports = {
    ok:"OKla"
}