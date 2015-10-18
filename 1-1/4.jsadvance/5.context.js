/**
 * 上下文=this
 */
var number = 2;
var obj = {number:4,
    fn1:(function(){
        this.number *=2;
        number = number*2;
        var number = 3;
        return function(){
            this.number *=2;
            number*=3;
            console.log(this.number);
        }})()}
var fn1 = obj.fn1;
console.log(number);//2
fn1();//3
obj.fn1();