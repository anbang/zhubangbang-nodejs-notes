/**
 * 如果说有多个异步任务同时进行，但在异步任务执行完毕之后才会回调怎么做
 *
 **/
var chaobing,tail;
var count = 0;
//下面相当于开了一个服务员
var waiter = function(){
    count++;
    if(count == 2){
        eat();
    }
};
chaobing = function(){
    setTimeout(function(){
        console.log('炒饼');
        waiter();//通知服务员
    },1000)
};

tail = function(){
    setTimeout(function(){
        console.log('鸡尾酒');
        waiter();//通知服务员
    },2000);
};
var eat = function(){
    console.log('开吃');
};
chaobing();
tail();