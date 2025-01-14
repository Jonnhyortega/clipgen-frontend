const underLineNavLink = () => {
  const pathActual = window.location.pathname;

  if (pathActual === "/login/") {
    document.getElementById("register").style.textDecoration = "none";
    document.getElementById("sobre").style.textDecoration = "none";
    document.getElementById("login").style.textDecoration = "underline";
  }
  if (pathActual === "register") {
    document.getElementById("login").style.textDecoration = "none";
    document.getElementById("sobre").style.textDecoration = "none";
    document.getElementById("register").style.textDecoration = "underline";
  }
  if (pathActual === "/sobre/") {
    document.getElementById("register").style.textDecoration = "none";
    document.getElementById("login").style.textDecoration = "none";
    document.getElementById("sobre").style.textDecoration = "underline";
  }
};

document.addEventListener("DOMContentLoaded", underLineNavLink);
