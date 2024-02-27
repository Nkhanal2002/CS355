"use strict";
const dogMainContainer = $(".dogs-main-container");
const searchBtn = $(".showImgBtn");
const dogImgsContainer = $(".dogs-Images");
const dogImgElement = $(".dImg");
const searchBox = $("#searchBox");
const dogBreedsEl = $("#dogbreeds");

function showImage(src) {
    dogImgElement.setAttribute(
      "src",
      src
    );
}

searchBtn.addEventListener("click", async () => {
  console.log("clicked");
  let breedName = searchBox.value;
  $(".h3Element").innerHTML = "";
  let response = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
  response = await response.json();

  const responseArray = response.message

  console.log("res", response);

  if (response.status === "success") {
    showImage(responseArray[Math.floor(Math.random() * responseArray.length)])
    searchBox.value = ""

    setInterval(() => {
      showImage(responseArray[Math.floor(Math.random() * responseArray.length)])
    }, 5000);
  } 
  else {
    const h3 = $(".h3Element");
    h3.style.textAlign = "center";
    h3.innerHTML = "Sorry! There is no such breed!";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  const breedNamesArray = Object.keys(data.message);

  console.log("Breed Names",breedNamesArray);

  breedNamesArray.forEach((breed) => {
    const optElement = document.createElement("option");
    optElement.value = breed;
    dogBreedsEl.appendChild(optElement);
  });
});
