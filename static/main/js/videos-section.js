function toggleSound(button) {
  const video = button.previousElementSibling;
//   video.pause();
  if (video.muted) {
    video.muted = false;
    button.textContent = "🔊";
  } else {
    video.muted = true;
    button.textContent = "🔇";
  }
}

const videoWrappers = document.querySelectorAll(".video-wrapper");
videoWrappers.forEach((wrapper) => {
  const video = wrapper.querySelector(".video");
  let isMouseInside = false;

  wrapper.addEventListener("mouseenter", () => {
    isMouseInside = true;
    video.play();
  });

  wrapper.addEventListener("mouseleave", () => {
    isMouseInside = false;
    video.pause();
  });

  const soundButton = wrapper.querySelector(".sound-toggle");
  soundButton.addEventListener("mouseenter", () => {
    video.play();
  });

  soundButton.addEventListener("mouseout", () => {
    if (isMouseInside && !video.muted) {
      video.play();
    }
  });
});




const videos = document.querySelectorAll(".sub-container-video");
const btnNext = document.getElementById("btn-next-container");
const btnPrev = document.getElementById("btn-prev-container");
let currentContainer = 0;

videos[currentContainer].classList.add("show-container");

function showNextContainer() {
  videos[currentContainer].classList.add("animate__backOutLeft");
  setTimeout(() => {
    videos[currentContainer].classList.remove("show-container");
    videos[currentContainer].classList.remove("animate__backOutLeft");
  }, 700);

  setTimeout(() => {
    currentContainer = (currentContainer + 1) % videos.length;
    videos[currentContainer].classList.add("show-container");
    videos[currentContainer].classList.add("animate__backInRight");
    setTimeout(() => {
      videos[currentContainer].classList.remove("animate__backInRight");
    }, 1000);
  }, 700); 
}

function showPrevContainer() {
  videos[currentContainer].classList.add("animate__backOutRight");
  
  setTimeout(() => {
    videos[currentContainer].classList.remove("show-container");
    videos[currentContainer].classList.remove("animate__backOutRight");
  }, 700);

  setTimeout(() => {
    currentContainer = (currentContainer - 1 + videos.length) % videos.length;
    videos[currentContainer].classList.add("show-container");
    videos[currentContainer].classList.add("animate__backInLeft");
    setTimeout(() => {
      videos[currentContainer].classList.remove("animate__backInLeft");
    }, 1000);
  }, 700); 
}

btnNext.addEventListener("click", showNextContainer);
btnPrev.addEventListener("click", showPrevContainer);
