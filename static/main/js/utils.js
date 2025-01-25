// FUNCTION TO SHOW MODAL LOGIN
const showLogin = () => {
  const modalLogin = document.getElementById("login-section");
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

// FUNCTION TO SHOW DASHBOARD CONTENTS
// PANELS TO SHOW
const uploadScript = document.getElementById("uploadForm");
const generateScript = document.getElementById("generate-script");
const yourVideos = document.getElementById("your-videos");
const config = document.getElementById("config");
// BUTTONS TO CONTROL
const generateScriptButton = document.getElementById("generate-script-tab");
const uploadScriptButton = document.getElementById("upload-script-tab");
const yourVideosButton = document.getElementById("your-videos-tab");
const configButton = document.getElementById("config-tab");
let showUploadScript = true;
let showGenerateScript = false;
// manejo de estado para mostrar los correspondientes paneles
const handleShowUploadOrGenerateScripts = () => {
  showUploadScript = !showUploadScript;
  showGenerateScript = !showGenerateScript;
};

const handleShowPanels = () => {
  generateScriptButton.addEventListener("click", () => {
    // handleShowUploadOrGenerateScripts();
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
    // handleShowUploadOrGenerateScripts();
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
};

// FUNCTION TO SHOW OPTIONS
// VARIABLES UPLOAD SCRIPT
const audioOptions = document.getElementById("options-audio-template");
const subtitleOptions = document.getElementById("options-subtitle-template");
const moreOptionsUpload = document.getElementById("more-options-upload");
const modal = document.getElementById("modal-upload");
const btnAudioOptions = document.getElementById("btn-audio-options");
const btnSubtitleOptions = document.getElementById("btn-subtitle-options");
const btnMoreOptions = document.getElementById("btn-more-options");
const btnSaveModal = document.getElementById("close-modal");
// VARIABLES UPLOAD SCRIPT

// VARIABLES GENERATE SCRIPT
const modal_GENERATE = document.getElementById("modal_GENERATE");
// opciones de configuracion
const audioOptions_GENERATE = document.getElementById("options-audio_GENERATE");
const subtitleOptions_GENERATE = document.getElementById(
  "options-subtitle_GENERATE"
);
const moreOptions_GENERATE = document.getElementById("more-options_GENERATE");
// buttons
const btnSaveModal_GENERATE = document.getElementById("close-modal_GENERATE");
const btnAudioOptions_GENERATE = document.getElementById(
  "btn-options-audio_GENERATE"
);
const btnSubtitleOptions_GENERATE = document.getElementById(
  "btn-options-subtitle_GENERATE"
);
const btnMoreOptions_GENERATE = document.getElementById(
  "btn-more-options_GENERATE"
);
// VARIABLES GENERATE SCRIPT

const optionsOff = () => {
  modal.style.display = "none";
  audioOptions.style.display = "none";
  subtitleOptions.style.display = "none";
  moreOptionsUpload.style.display = "none";
  modal_GENERATE.style.display = "none";
  audioOptions_GENERATE.style.display = "none";
  subtitleOptions_GENERATE.style.display = "none";
  moreOptions_GENERATE.style.display = "none";
};
const listeners = () => {
  // LISTENERS UPLOAD SCRIPT
  btnAudioOptions.addEventListener("click", () => {
    modal.style.display = "flex";
    subtitleOptions.style.display = "none";
    moreOptionsUpload.style.display = "none";
    audioOptions.style.display = "flex";
  });
  btnSubtitleOptions.addEventListener("click", () => {
    modal.style.display = "flex";
    audioOptions.style.display = "none";
    moreOptionsUpload.style.display = "none";
    subtitleOptions.style.display = "flex";
  });
  btnMoreOptions.addEventListener("click", () => {
    modal.style.display = "flex";
    audioOptions.style.display = "none";
    subtitleOptions.style.display = "none";
    moreOptionsUpload.style.display = "flex";
  });
  // LISTENERS GENERATE SCRIPTS
  btnAudioOptions_GENERATE.addEventListener("click", () => {
    modal_GENERATE.style.display = "flex";
    subtitleOptions_GENERATE.style.display = "none";
    moreOptions_GENERATE.style.display = "none";
    audioOptions_GENERATE.style.display = "flex";
  });
  btnSubtitleOptions_GENERATE.addEventListener("click", () => {
    modal_GENERATE.style.display = "flex";
    moreOptions_GENERATE.style.display = "none";
    audioOptions_GENERATE.style.display = "none";
    subtitleOptions_GENERATE.style.display = "flex";
  });
  btnMoreOptions_GENERATE.addEventListener("click", () => {
    modal_GENERATE.style.display = "flex";
    subtitleOptions_GENERATE.style.display = "none";
    audioOptions_GENERATE.style.display = "none";
    moreOptions_GENERATE.style.display = "flex";
  });

  btnSaveModal.addEventListener("click", () => {
    optionsOff();
  });
  btnSaveModal_GENERATE.addEventListener("click", () => {
    optionsOff();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  handleShowPanels();
  listeners();
});
