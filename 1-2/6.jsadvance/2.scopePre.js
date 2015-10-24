/**
 * 作用域内的预解释
 * 在js里能形成独立作用域是函数和作用域
 */
 var num =9;
 var name = 'broszhu';
 function say(){
   console.log(num);//undefined
   console.log(name);// broszhu
     num = 7;
     var num =6;
 }
say();