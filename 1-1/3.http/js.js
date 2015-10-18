function show(){
    //alert('hello baidu');
    var xhr = new XMLHttpRequest();
    xhr.open('get','/hello',true);
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            alert(this.responseText);
        }
    }
    xhr.send();
}