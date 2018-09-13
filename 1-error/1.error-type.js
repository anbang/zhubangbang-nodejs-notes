//1.EvalError 目前已经不被抛出了
function eval(arg) {
    return arg;
}
const obj={
    eval(arg){
        return arg;
    }
};
const myeval = eval;	// 不会抛出 EvalError 异常
console.log(obj.eval("2"));// 不会抛出 EvalError 异常
console.log(myeval("3"));	// 不会抛出 EvalError 异常

//2.SyntaxError
// console.log(+);//SyntaxError: Unexpected token )语法错误

//3.RangeError 好像并不报错 - -、
/*
while (true) {
     console.log("22");
}*/

//4.ReferenceError
// console.log(a);//ReferenceError: a is not defined

//5.TypeError
/*const Hello={};
Hello.f();//TypeError: Hello.f is not a function*/

//6.URIError
decodeURIComponent('%');//URIError: URI malformed