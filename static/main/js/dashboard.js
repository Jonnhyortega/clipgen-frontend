// FUNCION PARA MOSTRAR REGISTRO Y LOGIN
const modalLogin = document.getElementById("login-section");
const btnShowLogin = document.getElementById("btn-show-login");
const btnShowLoginMobile = document.getElementById("btn-show-login-mobile");
const modalRegister = document.getElementById("register-container");
const btnShowRegister = document.getElementById("btn-show-register");
const btnShowRegisterMobile = document.getElementById(
  "btn-show-register-mobile"
);
const btnCloseLogin = document.getElementById("close-modal-login");
const btnCloseRegister = document.getElementById("close-modal-register");
const btnLoginToRegister = document.getElementById("link-to-login-register");
const btnRegisterToLogin = document.getElementById("link-to-register-login");
let stateShowLogin = false;
let stateShowRegister = false;

const handleShowLoginAndRegister = () => {
  btnShowLogin.addEventListener("click", () => {
    stateShowLogin = !stateShowLogin;
    modalLogin.style.display = stateShowLogin ? "flex" : "none";
  });

  btnShowRegister.addEventListener("click", () => {
    stateShowRegister = !stateShowRegister;
    modalRegister.style.display = stateShowRegister ? "flex" : "none";
  });

  btnCloseLogin.addEventListener("click", () => {
    stateShowLogin = !stateShowLogin;
    modalLogin.style.display = stateShowLogin ? "flex" : "none";
  });

  btnCloseRegister.addEventListener("click", () => {
    stateShowRegister = !stateShowRegister;
    modalRegister.style.display = stateShowRegister ? "flex" : "none";
  });

  btnLoginToRegister.addEventListener("click", () => {
    stateShowRegister = !stateShowRegister;
    stateShowLogin = !stateShowLogin;
    modalLogin.style.display = stateShowLogin ? "flex" : "none";
    modalRegister.style.display = stateShowRegister ? "flex" : "none";
  });

  btnRegisterToLogin.addEventListener("click", () => {
    stateShowRegister = !stateShowRegister;
    stateShowLogin = !stateShowLogin;
    modalLogin.style.display = stateShowLogin ? "flex" : "none";
    modalRegister.style.display = stateShowRegister ? "flex" : "none";
  });

  btnShowLoginMobile.addEventListener("click", () => {
    stateShowLogin = !stateShowLogin;
    modalLogin.style.display = stateShowLogin ? "flex" : "none";
  });

  btnShowRegisterMobile.addEventListener("click", () => {
    stateShowRegister = !stateShowRegister;
    modalRegister.style.display = stateShowRegister ? "flex" : "none";
  });
};


// FUNCION PARA MOSTRAR PASSWORD EN REGISTRO
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

// FUNCION PARA MOSTRAR SEGUNDO PASSWORD EN REGISTRO
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

// FUNCION PARA MOSTRAR CONTRASEÑA EN LOGIN
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

// FUNCION PARA MOSTRAR CONTENIDO DEL DASHBOARD
// PANELES A MOSTRAR
const uploadScript = document.getElementById("uploadForm");
const generateScript = document.getElementById("generate-script");
const yourVideos = document.getElementById("your-videos");
const config = document.getElementById("config");
// BOTONES DE CONTROL
const generateScriptButton = document.getElementById("generate-script-tab");
const uploadScriptButton = document.getElementById("upload-script-tab");
const yourVideosButton = document.getElementById("your-videos-tab");
const configButton = document.getElementById("config-tab");
let showUploadScript = true;
let showGenerateScript = false;

// MANEJO DE ESTADO PARA MOSTRAR LOS PANELES
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

const listenersOptions = () => {
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
  // SAVE MODAL BUTTONS
  btnSaveModal.addEventListener("click", () => {
    optionsOff();
  });
  btnSaveModal_GENERATE.addEventListener("click", () => {
    optionsOff();
  });
};

// NO BORRAR
// FUNCTION TO SHOW CONFIG USER AND API CREDENCIALS SECTION
// const containerConfigApi = document.getElementById("content-config-apis");
// const containerChangeCredencials = document.getElementById(
//   "content-change-credencials"
// );
// let openContainerConfigApiChangeCredencials = false;
// const btnOpenConfigApi = document.getElementById("btn-open-config-api");
// const btnOpenChangeCredencials = document.getElementById(
//   "btn-open-credencials"
// );

// const handleContainersConfig_API = () => {
//   openContainerConfigApiChangeCredencials =
//     !openContainerConfigApiChangeCredencials;

//   containerConfigApi.classList.remove(
//     `${
//       openContainerConfigApiChangeCredencials
//         ? "close-form-config"
//         : "open-form-config"
//     }`
//   );
//   containerConfigApi.classList.add(
//     `${
//       openContainerConfigApiChangeCredencials
//         ? "open-form-config"
//         : "close-form-config"
//     }`
//   );
// };

// const handleContainersConfig_Credencials= () => {
//   openContainerConfigApiChangeCredencials =
//     !openContainerConfigApiChangeCredencials;

//     containerChangeCredencials.classList.remove(
//     `${
//       openContainerConfigApiChangeCredencials
//         ? "close-form-config"
//         : "open-form-config"
//     }`
//   );
//   containerChangeCredencials.classList.add(
//     `${
//       openContainerConfigApiChangeCredencials
//         ? "open-form-config"
//         : "close-form-config"
//     }`
//   );
// };

// const showConfigSections = () => {
//   btnOpenConfigApi.addEventListener("click", () => {
//     handleContainersConfig_API();
//   });
//   btnOpenChangeCredencials.addEventListener("click", () => {
//     handleContainersConfig_Credencials  ();
//   });

// };

// SHOW UPGRADE PANEL TO SECTION CHANGE-CREDENCIALS > UPGRADE PANEL
let showPanelUpgrade = false;
const panel = document.getElementById("upgradePanel");
const btnOpenUpgrade = document.getElementById("btn-upgrade-plan");
const btnCloseUpgrade = document.getElementById("btn-close-panel");
const handleShowPanelUpgrade = () => {
  btnOpenUpgrade.addEventListener("click", () => {
    showPanelUpgrade = !showPanelUpgrade;
    panel.style.display = showPanelUpgrade ? "flex" : "none";
  });
  btnCloseUpgrade.addEventListener("click", () => {
    showPanelUpgrade = !showPanelUpgrade;
    panel.style.display = showPanelUpgrade ? "flex" : "none";
  });
};

// FUNCTION TO SHOW PASSWORD IN CONFIG SECTION
const btnShowPwConfig1 = document.getElementById("show-pw-config1");
const btnShowPwConfig2 = document.getElementById("show-pw-config2");
const inputCurrentPassword = document.getElementById("currentPassword");
const inputNewPassword2 = document.getElementById("newPassword");
let showPasswordConfig1 = false;
let showPasswordConfig2 = false;
const handleShowPassword = () => {
  btnShowPwConfig1.addEventListener("click", () => {
    showPasswordConfig1 = !showPasswordConfig1;
    inputCurrentPassword.type = showPasswordConfig1 ? "text" : "password";

    btnShowPwConfig1.classList.remove(
      "fa-solid",
      "fa-eye",
      "far",
      "fa-eye-slash",
      "icon"
    );
    if (showPasswordConfig1) {
      btnShowPwConfig1.classList.add("fa-solid", "fa-eye");
    } else {
      btnShowPwConfig1.classList.add("far", "fa-eye-slash", "icon");
    }
  });

  btnShowPwConfig2.addEventListener("click", () => {
    showPasswordConfig2 = !showPasswordConfig2;
    inputNewPassword2.type = showPasswordConfig2 ? "text" : "password";

    btnShowPwConfig2.classList.remove(
      "fa-solid",
      "fa-eye",
      "far",
      "fa-eye-slash",
      "icon"
    );
    if (showPasswordConfig2) {
      btnShowPwConfig2.classList.add("fa-solid", "fa-eye");
    } else {
      btnShowPwConfig2.classList.add("far", "fa-eye-slash", "icon");
    }
  });
};

// FUNCTION TO REDIRECT GALLERY
const btnGenerateVideo = document.getElementById(
  "btn-generate-video-generate-script"
);
const btnGenerateUploadScriptVideo =
  document.getElementById("btn-upload-script");

const handleButtonsGenerateVideo = () => {
  btnGenerateVideo.addEventListener("click", () => {
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

  btnGenerateUploadScriptVideo.addEventListener("click", () => {
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
};

// FUNCION PARA OCULTAR Y DESOCULTAR LOS SELECTS DEL PANEL UPLOAD SCRIPT
var select = document.getElementById("subtitleOption");
const showSelects = () => {
  var selectsToDisable = [
    document.getElementById("subtitleType"),
    document.getElementById("subtitlePosition"),
    document.getElementById("inputLanguage"),
  ];

  selectsToDisable.forEach((select) => {
    select.disabled = true;
    select.style.opacity = 0.5;
    select.style.cursor = "not-allowed";
  });

  select.addEventListener("change", () => {
    var selectedOption = this.options[this.selectedIndex];

    selectsToDisable.forEach((select) => {
      select.disabled = selectedOption.value === "yes" ? false : true;
      select.style.opacity = selectedOption.value === "yes" ? 1 : 0.5;
      select.style.cursor =
        selectedOption.value === "yes" ? "pointer" : "not-allowed";
    });
  });
};

// FUNCION PARA OCULTAR Y DESOCULTAR LOS SELECTS DEL PANEL GENERATE SCRIPT
var selectGenerate = document.getElementById("subtitleOption_GENERATE");
const showSelectsGenerateScript = () => {
  var selectsToDisable = [
    document.getElementById("subtitleType_GENERATE"),
    document.getElementById("subtitlePosition_GENERATE"),
    document.getElementById("inputLanguage_GENERATE"),
  ];

  selectsToDisable.forEach((select) => {
    select.disabled = true;
    select.style.opacity = 0.5;
    select.style.cursor = "not-allowed";
  });

  selectGenerate.addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex];
    
    selectsToDisable.forEach((select) => {
      select.disabled = selectedOption.value === "yes" ? false : true;
      select.style.opacity = selectedOption.value === "yes" ? 1 : 0.5;
      select.style.cursor =
        selectedOption.value === "yes" ? "pointer" : "not-allowed";
    });
  });
};

// INICIALIZACION DE APP
document.addEventListener("DOMContentLoaded", () => {
  // BOTONES PARA MOSTRAR PANEL DE LOGIN Y REGISTRO
  handleShowLoginAndRegister();
  // BOTONES PARA MOSTRAR CADA FORM DE LA CONFIGURACION
  handleShowPanels();
  // BOTONES PARA MOSTRAR OPCIONES DE CADA SECCION
  listenersOptions();
  // MANEJA EL ESTADO DE LOS SELECTS DEL PANEL UPLOAD SCRIPT
  showSelects();
  // MANEJA EL ESTADO DE LOS SELECTS DEL PANEL GENERATE SCRIPT
  showSelectsGenerateScript();
  // maneja la apertura del contenedor que muestra los videos
  showVideos();
  // APERTURA DE PANEL UPGRADE
  handleShowPanelUpgrade();
  // FUNCION PARA MOSTRAR PASSWORD EN SECCION DE CONFIGURACION DE PASSWORD
  handleShowPassword();
  // FUNCION PARA REDIRECCIONAR A GALERIA CUANDO SE DA CLICK EN GENERAR VIDEO
  handleButtonsGenerateVideo();
  // test loader
  functionTest();
});

// SOLO EN CONTEXTO DE PRUEBA
const functionTest = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
};
