var download_button = document.querySelector("#download_a");
var svg_download = document.querySelector("#download");
download_button.addEventListener('mouseenter',()=>{
    svg_download.setAttribute("fill","black");
});
download_button.addEventListener('mouseleave',()=>{
    svg_download.setAttribute("fill","white");
});