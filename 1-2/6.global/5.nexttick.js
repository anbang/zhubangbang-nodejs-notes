/**
 * 同步异步
 **/
/*
var bun,cucumber;
function getbun(){
    setTimeout(function(){
        bun = 'bun';
    },2000);
}
function getcucumber(){
    setTimeout(function(){
        cucumber = 'cucumber';
    },1000);
}
function eat(){
    console.log(bun,cucumber);
}
getbun();
getcucumber();
eat();
*/


function say(){
    console.log('hello');
}

//setTimeout(say,0);
setImmediate(function(){
    console.log('4');
});
setImmediate(function(){
    console.log('5');
});
process.nextTick(function(){
    console.log('1');
    process.nextTick(function(){
        console.log('2');
        process.nextTick(function(){
            console.log('3');
        });
    });
});

console.log('next');

