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

// VIDEO ITEMS
const templateVideoItem = `<div class="video-item">
            <h4>TITULO DE VIDEO</h4>
            <video width="320" height="240" controls>
              <source
                src="https://www.youtube.com/watch?v=qw7YMU3EHRI"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
            <div class="button-container">
                        <button class="bin-button" onclick="deleteVideo($video.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 7" class="bin-top">
                                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                <line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12"></line>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 39" class="bin-bottom">
                                <mask fill="white" id="path-1-inside-1_8_19">
                                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                                </mask>
                                <path mask="url(#path-1-inside-1_8_19)" fill="white" d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"></path>
                                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89 80" class="garbage">
                                <path fill="white" d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"></path>
                            </svg>
                        </button>
                        <button class="Btn" onclick="downloadVideo('{video.download_url')">
                            <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                            </svg>
                            <span class="icon2"></span>
                            <span class="tooltip">Download</span>
                        </button>
                    </div>
          </div>`;
const containerExistingVideos = document.getElementById("existingVideos");
// renderizar cada video item
const renderTemplates = (count) => {
  let videoItems = "";
  for (let i = 1; i <= count; i++) {
    videoItems += templateVideoItem;
  }
  containerExistingVideos.innerHTML += videoItems;
};
// function to show videos
const btnOpenContainer = document.getElementById("btn-open-existing-videos");
let containerOpen = false;
const showVideos = () => {
  btnOpenContainer.addEventListener("click", () => {
    containerOpen = !containerOpen;
    if (containerOpen) {
      containerExistingVideos.classList.remove("close-existing");
      containerExistingVideos.classList.add("open-existing");
    } else {
      containerExistingVideos.classList.remove("open-existing");
      containerExistingVideos.classList.add("close-existing");
    }
  });
};

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

// INICIALIZACION DE APP
document.addEventListener("DOMContentLoaded", () => {
  // BOTONES PARA MOSTRAR CADA FORM DE LA CONFIGURACION
  handleShowPanels();
  // BOTONES PARA MOSTRAR OPCIONES DE CADA SECCION
  listenersOptions();
  // RENDERIZA LOS VIDEO ITEMS EN CONTENEDOR #EXISTINGVIDEOS
  renderTemplates(20);
  // maneja la apertura del contenedor que muestra los videos
  showVideos();

  // APERTURA DE PANEL UPGRADE
  handleShowPanelUpgrade();
});
