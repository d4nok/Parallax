const header = document.querySelector(".header");
const background = document.querySelector(".paralax-img:nth-child(1)");
const text = document.querySelector(".content-body");

window.addEventListener("scroll" , function(){
    const scroll = window.pageYOffset;
    background.style.top = scroll / 1.4 + "px";
    header.style.opacity=1 - scroll / 300;
    if (scroll > 100 && scroll < 300){
        text.style.bottom = scroll / 2 + "px";
    }
})