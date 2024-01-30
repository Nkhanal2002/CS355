"use strict"
const $ = document.querySelector.bind(document);
const moonIcon = $(".moon-icon");
// let darkMode = localStorage.getItem("dark-mode-theme");

// const enableDarkMode = ()=>{
//     document.body.classList.add("dark-mode");
//     localStorage.setItem("dark-mode-theme", "enabled");
// }
// const disableDarkMode = ()=>{
//     document.body.classList.remove("dark-mode");
//     localStorage.setItem("dark-mode-theme", "disabled");
// }

moonIcon.addEventListener("click", (e)=>{
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode-theme", "dark-mode");
    // if (darkMode === "disabled"){
    //     enableDarkMode();
    // }
    // else{
    //     disableDarkMode();
    // }

})
