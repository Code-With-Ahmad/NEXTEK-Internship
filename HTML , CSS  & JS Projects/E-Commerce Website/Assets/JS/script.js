document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarSupportedContent");
    const iconsContainer = document.querySelector(".icons-container");

    navbarToggler.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        iconsContainer.classList.remove("icons-hidden");
      } else {
        iconsContainer.classList.add("icons-hidden");
      }
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
      iconsContainer.classList.remove("icons-hidden");
    });
  });