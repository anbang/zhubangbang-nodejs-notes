console.log('a');
console.log('b');
setTimeout(function(){
    console.log('setTimeout');
},1000);
while(true){}//这个是死循环，会阻塞后面的代码和setTimeout
console.log('c');