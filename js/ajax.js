var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.status==200 && this.readyState==4){
        document.getElementsByClassName("main_content")[0].innerHTML = this.responseText;
    }
    else{
        console.log("File not found");
    }
}

function open_home(){
   window.history.pushState("Home","home","./");
   window.location.reload();
   
 }

function open_about(){   
   xhr.open("GET","./snippets/about.html",true);
   xhr.send();
   open_menu();
}

function open_donutsmenu(){ 
    xhr.open("GET","./snippets/menu.html",false);
    xhr.send();
    open_menu();
    document.getElementsByClassName("donut_menu")[0].innerHTML += html;

 }

 function open_contact(){   
    xhr.open("GET","./snippets/contact.html",true);
    xhr.send();
    open_menu();
   
 }