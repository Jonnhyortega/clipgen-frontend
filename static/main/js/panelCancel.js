// SHOW AND HIDE CANCEL PANEL
let showPanelCancel = false;
const cancelPanel = document.getElementById("cancelPanel");
const btnCloseCancelPanel = document.getElementById("btn-close-cancel-panel");
const btnConfirmCancelPlan = document.getElementById("btn-confirm-cancel-plan");
const btnShowcancelPanel = document.getElementById("btn-cancel-plan");
const HandleshowCancelPanel = () => {
  showPanelCancel = !showPanelCancel;
  if (showPanelCancel) cancelPanel.style.display = "flex";
  if (!showPanelCancel) cancelPanel.style.display = "none";
};

function confirmCancelPlan() {
  // Llamar al endpoint que cancela la suscripción en Stripe
  fetch("/cancel-subscription/", {
    method: "POST",
    headers: {
      "X-CSRFToken": getCSRFToken(),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Error al cancelar suscripción:", data.error);
        // Podrías mostrar un mensaje al usuario
      } else {
        console.log(data.message);
        // Ocultar el panel y recargar o redirigir
        HandleshowCancelPanel();
        // Recargar la página para que desaparezca el plan:
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const listenersCancelPanel = () => {
  btnCloseCancelPanel.addEventListener("click", () => {
    HandleshowCancelPanel();
  });
  btnConfirmCancelPlan.addEventListener("click", () => {
    confirmCancelPlan();
  });

  btnShowcancelPanel.addEventListener("click", () => {
    HandleshowCancelPanel();
  });
};

document.addEventListener("DOMContentLoaded", listenersCancelPanel());
