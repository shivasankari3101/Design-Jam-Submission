var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.status==200 && this.readyState==4){
        document.getElementsByClassName("main_content")[0].innerHTML = this.responseText;
    }
    else{
        console.log("file not found");
    }
}

function open_home(){   
    xhr.open("GET","./snippets/home.html",true);
    xhr.send();
 }

function open_about(){   
   xhr.open("GET","./snippets/about.html",true);
   xhr.send();
}

function open_donutsmenu(){ 
    xhr.open("GET","./snippets/menu.html",true);
    xhr.send();
 }

 function open_contact(){   
    xhr.open("GET","./snippets/contact.html",true);
    xhr.send();
 }