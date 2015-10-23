/**
 * 在js var function 需要预解释的
 * var  只声明不赋值
 * function 声明并且赋值
 */
console.log(num);//undefined
var num =9;
hello();// hello
world(); // world
function hello(){
    console.log('hello');
}
var world = function(){
    console.log('world');
}