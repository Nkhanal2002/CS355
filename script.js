"use strict"
const $ = document.querySelector.bind(document);
const moonIcon = $(".moon-icon");

moonIcon.addEventListener("click", ()=>{
    if(document.documentElement.hasAttribute("dark-mode-theme")){
        document.documentElement.removeAttribute("dark-mode-theme");
        localStorage.removeItem("dark-mode-theme");
    }
    else{
        document.documentElement.setAttribute("dark-mode-theme", true);
        localStorage.setItem("dark-mode-theme", true);
    }

})
window.addEventListener("load", ()=>{
    if(localStorage.getItem("dark-mode-theme")){
        document.documentElement.setAttribute("dark-mode-theme", true);    }
})
