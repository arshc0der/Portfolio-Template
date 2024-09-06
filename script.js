document.addEventListener('DOMContentLoaded', () => {
    if (window.screen.width >= 200 && window.screen.width <= 700) {
        var navbar = document.querySelector("#navbar");
        var nav = document.querySelector("#nav_res");
        var nav1 = document.querySelector("#nav_res1");
        //alert("window on live");
        console.log(window.screen.width);
        nav.remove();
        nav1.remove();
        const menu = document.createElement("div");
        menu.setAttribute('id', 'menu');
        navbar.appendChild(menu);
        const menu_item1 = document.createElement("div");
        menu_item1.setAttribute('class', 'menu_icon_items');
        menu.appendChild(menu_item1);
        const menu_item2 = document.createElement("div");
        menu_item2.setAttribute('class', 'menu_icon_items');
        menu.appendChild(menu_item2);
        const menu_item3 = document.createElement("div");
        menu_item3.setAttribute('class', 'menu_icon_items');
        menu.appendChild(menu_item3);
        var sidebar = document.querySelector("#side_bar");
        sidebar.style.display = "none";
        menu.addEventListener('click', () => {
           // alert("open");
           // sidebar.style.animation = "1s linear 1s forwards sidebaropen";
            sidebar.style.display = "block";
        });
        var sidebar_close = document.querySelector("#menu_close");
        sidebar_close.addEventListener('click', () => {
           // alert("close");
           // sidebar.style.animation = "1s linear 1s forwards sidebaropen";
            sidebar.style.display = "none";
        });
    };

});

var hire_me = document.querySelector('#hire_me_user_info');
var popup_close = document.querySelector('#cancel_close');
function popup(){
    hire_me.style.display = "block";
};
popup_close.addEventListener('click',()=>{
    hire_me.style.display = "none";
});