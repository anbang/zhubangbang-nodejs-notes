function sum(){
    var flag=0;
    for(var i= 0,len=arguments.length;i<len;i++){
        var argNum=arguments[i];
        typeof argNum!=="number"?argNum=Number(argNum):void 0;
        !isNaN(argNum)?flag+=argNum:void 0;
    }
    return flag
}
 var testNum=sum(1,2,3,5,67,87,89,9);
console.log(testNum);

exports.sum=sum;