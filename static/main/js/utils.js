// FUNCTION TO SHOW MODAL LOGIN

  const showLogin = () => {
    const modalLogin = document.getElementById("login-section");
    console.log("depuracion")
    if (modalLogin.style.display === "none") {
      modalLogin.style.display = "flex";
    } else {
      modalLogin.style.display = "none";
    }
  };

const showRegister = () => {
  const modalRegister = document.getElementById("register-container");

  if (modalRegister.style.display === "none") {
    modalRegister.style.display = "flex";
  } else {
    modalRegister.style.display = "none";
  }
};



