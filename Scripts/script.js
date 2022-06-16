(function () {
  "use strict";
  // Login submission
  const modalForm = document.getElementById("login-form");
  modalForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    document.querySelector(".modal-body").innerHTML =
      "<h4>Oops!!! <br> Sorry, webpage is still under development</h4>";
  });
  // show password
  const showPasswordBtn = document.querySelector(".p-eye");
  showPasswordBtn.addEventListener("click", function () {
    const password = document.querySelector(".pass-w");
    const showPasswordIcon = document.querySelector(".eye-icon");
    if (showPasswordIcon.classList.contains("bi-eye")) {
      showPasswordIcon.classList.remove("bi-eye");
      showPasswordIcon.classList.add("bi-eye-slash");
      password.removeAttribute("type");
    } else if (showPasswordIcon.classList.contains("bi-eye-slash")) {
      showPasswordIcon.classList.add("bi-eye");
      showPasswordIcon.classList.remove("bi-eye-slash");
      password.setAttribute("type", "password");
    }
  });
})();
