// CONTROL SHOW NAV MOBILE
const navMobile = document.getElementById("nav-mobile");
const btnNavMobile = document.getElementById("btn-menu-mobile");
let stateNavMobile = false;

const handleNavMobile = (shouldOpen) => {
  if (shouldOpen === undefined) {
    stateNavMobile = !stateNavMobile;
  } else {
    stateNavMobile = shouldOpen;
  }

  if (stateNavMobile) {
    navMobile.classList.remove("close-nav-mobile");
    navMobile.classList.add("open-nav-mobile");
  } else {
    navMobile.classList.remove("open-nav-mobile");
    navMobile.classList.add("close-nav-mobile");
  }
};

const linkGenerateContent = document.getElementById("link-generate-content");

const handleActionLink = () => {
  const urlActual = window.location.href;
  console.log(urlActual);

  const targetURL = "http://127.0.0.1:8000";

  if (urlActual === targetURL || urlActual === targetURL + "/") {
    handleNavMobile(false);
  } else {
    window.location.href = targetURL;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  btnNavMobile.addEventListener("click", () => handleNavMobile());
  linkGenerateContent.addEventListener("click", handleActionLink);
});
