
function after(times,func){
    if(times<=0){
        return func();
    }
    return function(){
        if(--times<1){
            return func.apply(this,arguments);
        }
    }
}

var eatApple = after(3,function(){
    console.log('吃光苹果');
});
eatApple();//..
eatApple();//
eatApple();//