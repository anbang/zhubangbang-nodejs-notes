/**
 *   回头再调用
 *
 *   $('#btn').click(function(){
 *       alert('btnclick')
 *   });
 **/

function hello(){
    console.log('hello');
};
setTimeout(hello,2000);
setTimeout(function(){
    console.log('word');
},2000);

