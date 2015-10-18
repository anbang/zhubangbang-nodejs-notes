var obj = {name:'zfpx',age:7};
for(var i in obj){
    console.log(i);
}

Object.prototype.email = 'zfpx@126.com';
console.log(obj.email);
console.log(Object.keys(obj));

console.log(Array.isArray([]));//true
console.log(Array.isArray(new Array));//true
console.log(Array.isArray(new Array()));//true
console.log(Array.isArray(null));//false
console.log(Array.isArray(arguments));//false


[1,2,3].forEach(function(item,index,arr){
    console.log(item,index,arr);
})

var arr = [1,2,3].filter(function(item){
        return item <2;
    });
console.log(arr);

arr = [1,2,3].map(function(item){
    return item*2;
});
console.log(arr);

console.log(JSON.stringify(obj));
console.log(JSON.parse('{"name":"zfpx","age":7}'));
//存取器 访问属性使用它来定义
/*Date.prototype.__defineGetter__('ago',function(){
    return (new Date().getTime()-this.getTime())/1000;
})*/
Date.prototype.ago = function(){
    return (new Date().getTime()-this.getTime())/1000;
}
var date = new Date(new Date().getTime()- 60*60*1000);
console.log(date.ago());//3600

