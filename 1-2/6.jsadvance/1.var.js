/**
  预解释
 var function 会进行预解析
 var 定义但不赋值
 function 定义并且赋值
 **/
console.log(num);//undefine；只定义没有赋值
var num = 9;
hello();// 可以执行
//world();//不能,因为是var赋值的
function hello(){
  return getName();//此时return后面的代码还是执行的,这里只能用function的；如果想word一样声明的，会报错的
  function getName(){
    console.log('getname');
  }
}
var world = function(){
  console.log();
}