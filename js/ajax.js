var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.status==200 && this.readyState==4){
        document.getElementsByClassName("main_content")[0].innerHTML = this.responseText;
    }
    else{
        console.log("file not found");
    }
}

xhr.open("GET","./snippets/home.html",true);
xhr.send();