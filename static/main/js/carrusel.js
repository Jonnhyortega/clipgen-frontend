const carruselTrack = document.getElementById("carrusel-track");
const carruselContainers = document.querySelectorAll(".carrusel-container");
const btnNextContainer = document.getElementById("btn-next-container");
const btnBackwardContainer = document.getElementById("btn-backward-container");

let currentIndex = 0;
let leftAnimate = false;
let rightAnimate = false;

const handleShowContainer = () => {
  if (carruselContainers.length > 0) {
    carruselContainers.forEach((container) => {
      container.style.display = "none";
    });

    if (leftAnimate) {
      carruselContainers[currentIndex].classList.add("animate__backInLeft");
    }
    if (rightAnimate) {
      carruselContainers[currentIndex].classList.add("animate__backInRight");
    }

    carruselContainers[currentIndex].style.display = "grid";
  }
};

const nextContainer = () => {
  currentIndex++;
  leftAnimate = false;
  rightAnimate = !rightAnimate;
  if (currentIndex >= carruselContainers.length) {
    currentIndex = 0;
  }

  handleShowContainer();
};

const backwardContainer = () => {
  currentIndex--;
  rightAnimate = false;
  leftAnimate = !leftAnimate;

  if (currentIndex <= 0) {
    currentIndex = carruselContainers.length - 1;
        
  }

  handleShowContainer();
};

document.addEventListener("DOMContentLoaded", () => {
  handleShowContainer();
  btnNextContainer.addEventListener("click", nextContainer);
  btnBackwardContainer.addEventListener("click", backwardContainer);
});
