// FUNCTION TO SHOW MODAL LOGIN
const showLogin = () => {
  const modalLogin = document.getElementById("login-section");
  console.log("depuracion");
  if (modalLogin.style.display === "none") {
    modalLogin.style.display = "flex";
  } else {
    modalLogin.style.display = "none";
  }
};
// FUNCTION TO SHOW MODAL REGISTER
const showRegister = () => {
  const modalRegister = document.getElementById("register-container");

  if (modalRegister.style.display === "none") {
    modalRegister.style.display = "flex";
  } else {
    modalRegister.style.display = "none";
  }
};
// FUNCTION TO CLOSE MODAL LOGIN AND OPEN REGISTER
const loginToRegister = () => {
  const modalLogin = document.getElementById("login-section");
  const modalRegister = document.getElementById("register-container");

  modalLogin.style.display = "none";
  modalRegister.style.display = "flex";
};
// FUNCTION TO CLOSE MODAL REGISTER AND OPEN LOGIN
const registerToLogin = () => {
  const modalLogin = document.getElementById("login-section");
  const modalRegister = document.getElementById("register-container");

  modalRegister.style.display = "none";
  modalLogin.style.display = "flex";
};
// FUNCTION TO SHOW PASSWORD1 REGISTER
let statePassword = false;
const divIcon = document.getElementById("icon-password1");
const inputPassword = document.getElementById("password1");

divIcon.addEventListener("click", () => {
  statePassword = !statePassword;

  if (statePassword) {
    inputPassword.type = "text";
    divIcon.innerHTML = '<i class="far fa-eye-slash icon"></i>';
  } else {
    inputPassword.type = "password";
    divIcon.innerHTML = '<i class="fa-solid fa-eye"></i></i>';
  }
});

// FUNCTION TO SHOW PASSWORD2 REGISTER
let statePassword2 = false;
const divIcon2 = document.getElementById("icon-password2");
const inputPassword2 = document.getElementById("password2");

divIcon2.addEventListener("click", () => {
  statePassword2 = !statePassword2;
  if (statePassword2) {
    inputPassword2.type = "text";
    divIcon2.innerHTML = '<i class="far fa-eye-slash icon"></i>';
  } else {
    inputPassword2.type = "password";
    divIcon2.innerHTML = '<i class="fa-solid fa-eye"></i></i>';
  }
});
// FUNCTION TO SHOW PASSWORD IN LOGIN
let stateloginPassword = false;
const divIconLogin = document.getElementById("icon-login-password");
const loginPassword = document.getElementById("login-password");

divIconLogin.addEventListener("click", () => {
  stateloginPassword = !stateloginPassword;

  if (stateloginPassword) {
    loginPassword.type = "text";
    divIconLogin.innerHTML = '<i class="far fa-eye-slash icon"></i>';
  } else {
    loginPassword.type = "password";
    divIconLogin.innerHTML = '<i class="fa-solid fa-eye"></i></i>';
  }
});

// FUNCTION TO CONTROL DASHBOARD ELEMENTS SHOW AND HIDDEN
const asideButtons = document.getElementById("aside-buttons");
const asideControl = document.getElementById("control-aside");
const containerApp = document.getElementById("dashboard-content-generator");
let asideOpen = false;

asideControl.addEventListener("click", () => {
  asideOpen = !asideOpen;
  if (asideOpen) {
    asideButtons.classList.remove("close-aside");
    asideButtons.classList.add("open-aside");
    containerApp.classList.remove("control-container-close");
    containerApp.classList.add("control-container-open");
    asideControl.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  } else {
    asideButtons.classList.remove("open-aside");
    asideButtons.classList.add("close-aside");
    containerApp.classList.remove("control-container-open");
    containerApp.classList.add("control-container-close");
    asideControl.innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i>`;
  }
});

// FUNCTION TO SHOW DASHBOARD CONTENTS
// PANELS TO SHOW
const generateScript = document.getElementById("generate-script");
const uploadScript = document.getElementById("upload-script");
const yourVideos = document.getElementById("your-videos");
const config = document.getElementById("config");
// BUTTONS TO CONTROL
const generateScriptButton = document.getElementById("generate-script-tab");
const uploadScriptButton = document.getElementById("upload-script-tab");
const yourVideosButton = document.getElementById("your-videos-tab");
const configButton = document.getElementById("config-tab");

generateScriptButton.addEventListener("click", () => {
  generateScript.style.display = "flex";
  uploadScript.style.display = "none";
  yourVideos.style.display = "none";
  config.style.display = "none";
  // BUTTONS ACTIVE
  generateScriptButton.classList.add("active");
  uploadScriptButton.classList.remove("active");
  yourVideosButton.classList.remove("active");
  configButton.classList.remove("active");
});

uploadScriptButton.addEventListener("click", () => {
  uploadScript.style.display = "flex";
  generateScript.style.display = "none";
  yourVideos.style.display = "none";
  config.style.display = "none";
  // BUTTONS ACTIVE
  uploadScriptButton.classList.add("active");
  generateScriptButton.classList.remove("active");
  yourVideosButton.classList.remove("active");
  configButton.classList.remove("active");
});

yourVideosButton.addEventListener("click", () => {
  yourVideos.style.display = "flex";
  uploadScript.style.display = "none";
  generateScript.style.display = "none";
  config.style.display = "none";
  // BUTTONS ACTIVE
  yourVideosButton.classList.add("active");
  uploadScriptButton.classList.remove("active");
  generateScriptButton.classList.remove("active");
  configButton.classList.remove("active");
});

configButton.addEventListener("click", () => {
  config.style.display = "flex";
  uploadScript.style.display = "none";
  yourVideos.style.display = "none";
  generateScript.style.display = "none";
  // BUTTONS ACTIVE
  configButton.classList.add("active");
  uploadScriptButton.classList.remove("active");
  yourVideosButton.classList.remove("active");
  generateScriptButton.classList.remove("active");
});
