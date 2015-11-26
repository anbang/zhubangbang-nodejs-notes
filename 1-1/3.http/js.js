var oBtn=document.getElementById("btn");
var oBtn2=document.getElementById("btn2");

oBtn.onclick=function(){
    alert("why u click me?")
};
setInterval(function(){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","/ajax",true);
    xhr.onload=function(){
        if(this.status==200){
            oBtn2.innerHTML=xhr.response;
        }
    };
    xhr.send();
},1000);