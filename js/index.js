var html=" ";
build_card();
function build_card(){    
    for(var i=0;i<menu_items.menu.length;i++){
       html+= "<div class='menu_card'><img src="+ `${menu_items.menu[i].image}` +"><h3>" + `${menu_items.menu[i].name}` +"</h3><div class='order'><div class='price'>";
        html+=`${menu_items.menu[i].price}`+"</div> <button class='button'>Order now</button></div></div>";
   } 
}


function open_menu(){
     document.getElementsByClassName("header_3")[0].classList.toggle("active");
    document.getElementsByClassName("bars")[0].classList.toggle("cross");
    document.body.classList.toggle("fixed");
}