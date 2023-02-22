// No scroll in loader page

function noScroll() {
  const html = document.querySelector("html");
  html.style.overflowY = "hidden";

  function scroller() {
    html.style.overflowY = "visible";
  }
  setInterval(scroller, 2500);
}
noScroll();




  
 

//Display Header img slider 
let images = document.querySelectorAll(".header__card");
let index = 0;

function displayImg() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("header__card--active");
  }
  images[index].classList.add("header__card--active");
  updateIndicators();
  if (index === images.length - 1) {
    index = 0;
  } else {
    index++;
  }
}

setInterval(displayImg, 7000);

let buttons = document.querySelectorAll(".header__indicator");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    index = i;
    displayImg();
  });
}

function updateIndicators() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("header__indicator--active");
  }
  buttons[index].classList.add("header__indicator--active");
}

updateIndicators();






/////////////////////////////////////////////////////////






// Display article on click

let currentIndex = 0;
const articles = document.querySelectorAll(".region__about");
const articleImg = document.querySelectorAll(".region__cardImg");

function displayArticle() {
  articles[currentIndex].classList.remove("region__about--active");
  articleImg[currentIndex].classList.remove("region__cardImg--active");
  currentIndex = (currentIndex + 1) % articles.length;
  articles[currentIndex].classList.add("region__about--active");
  articleImg[currentIndex].classList.add("region__cardImg--active");
}



// Create imgs gallery

function createSlider(source) {
  const slider = document.querySelector(".visite__gallery");
  const gallery = document.createElement("div");
  gallery.classList.add("gallery__slider");
  slider.appendChild(gallery);

  const btnClose = document.createElement("button");
  btnClose.classList.add("gallery__slider--closer");
  btnClose.textContent = "X";
  gallery.appendChild(btnClose);

  const arrowLeft = document.createElement("button");
  arrowLeft.classList.add("gallery__btn");
  arrowLeft.textContent = "◄";
  gallery.appendChild(arrowLeft);

  const img = document.createElement("img");
  img.classList.add("gallery__img--current");
  img.src = document.querySelectorAll(".currentImg").src = source;
  gallery.appendChild(img);

  const arrowRight = document.createElement("button");
  arrowRight.classList.add("gallery__btn");
  arrowRight.textContent = "►";
  gallery.appendChild(arrowRight);

  let currentImgIndex = 0;
  const images = document.querySelectorAll(".currentImg");

  arrowLeft.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    img.src = images[currentImgIndex].src;
  });
  arrowRight.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    img.src = images[currentImgIndex].src;
  });

  btnClose.addEventListener("click", function () {
    gallery.remove();
  });
}
