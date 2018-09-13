console.log("this is a log");
console.info("this is a info");
console.error("this is a error");//红色的提示；
console.warn("this is a warn");//红色的提示
console.time("test");//需要传一个字符串
for(var i=0;i<1000000;i++){}
console.timeEnd("test");//需要传一个和上次一样的字符串
/*输出3ms,表示运行了3ms*/
