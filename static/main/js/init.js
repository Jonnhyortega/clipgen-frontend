let progress = 0;

function updateProgress() {
  const progressBar = document.getElementById("progress-bar");

  if (progress <= 100) {
    progress += 1;
    progressBar.style.width = progress + "%";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateProgress, 200);
});


