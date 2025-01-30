document.addEventListener("DOMContentLoaded", () => {
  // Modal
  const openModalBtn = document.getElementById("open-modal-btn");
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".close-btn");

  openModalBtn.addEventListener("click", function () {
    modal.classList.add("open");
  });

  closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("open");
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  // Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  } else {
    console.warn("Menu toggle elements not found.");
  }
});
