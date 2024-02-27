"use strict";
const dogMainContainer = $(".dogs-main-container");
const searchBtn = $(".showImgBtn");
const dogImgsContainer = $(".dogs-Images");
const dogImgElement = $(".dImg");
const searchBox = $("#searchBox");
const dogBreedsEl = $("#dogbreeds");

function showImage(src) {
  dogImgElement.setAttribute("src", src);
}

async function getImage() {
  let breedNameVal = searchBox.value;
  $(".h3Element").innerHTML = "";
  let response = await fetch(`/image/${breedNameVal}`);
  response = await response.json();
  console.log("res", response);

  if (response.status === "success") {
    return response.message;
  } else {
    return null;
  }
}

searchBtn.addEventListener("click", async () => {
  console.log("clicked");
  const image = await getImage();

  if (image !== null) {
    dogImgsContainer.classList.add("img-container");
    showImage(image);

    setInterval(async () => {
      const newImage = await getImage();
      showImage(newImage);
    }, 5000)
  } else {
    dogImgsContainer.classList.remove("img-container");
    const h3 = $(".h3Element");
    h3.style.textAlign = "center";
    h3.innerHTML = "Sorry! There is no such breed!";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  let res = await fetch("http://localhost:3000/breeds");
  let data = await res.json();
  console.log(data);
  let breedNameArray = Object.keys(data);
  console.log(breedNameArray);
  
  breedNameArray.forEach((breed) => {
    const optElement = document.createElement("option");
    optElement.value = breed;
    dogBreedsEl.appendChild(optElement);
  });
});
