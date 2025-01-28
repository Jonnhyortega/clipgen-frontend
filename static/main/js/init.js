// const init = () => {
//   document.addEventListener("DOMContentLoaded", () => {
//     show
//    })
// };

let progress = 0;

function updateProgress() {
  const progressBar = document.getElementById("progress-bar");

  // Incrementar el valor de progreso
  if (progress <= 100) {
    progress += 1;
    progressBar.style.width = progress + "%";
  }
}

// Llamar a updateProgress cada 1 segundo
document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateProgress, 200); // Ejecuta updateProgress cada 1000 ms (1 segundo)
});


