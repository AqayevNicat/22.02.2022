// Header language select-option
var arrow = document.querySelector(".top .right #arrow");
var icon = document.querySelector(".top .right #arrow .downl")
arrow.addEventListener("click",function(){
    icon.classList.toggle("arrow");
})

// Open-close input
var search = document.querySelector("#search");
var closeIcon = document.querySelector("#close-icon");
search.addEventListener("click",function(){
    var myinput = document.querySelector("#input");
    myinput.classList.toggle("search-input");
})
closeIcon.addEventListener("click",function(){
    var myinput = document.querySelector("#input");
    myinput.classList.add("search-input");
})

// Menu bar 
var openBar = document.querySelector("#open-bar");
var closeBar = document.querySelector("#close-bar");
var menu = document.querySelector("#menu");
openBar.addEventListener("click",function(){
    openBar.style.opacity = "0";
    closeBar.style.display = "inline-block";
    menu.style.width = "100%";
    menu.style.opacity = "1";
})
closeBar.addEventListener("click",function(){
    closeBar.style.display = "none";
    openBar.style.opacity = "1";
    menu.style.width = "0%";
    menu.style.opacity = "0";
})