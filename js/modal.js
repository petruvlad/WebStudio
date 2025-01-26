// Funcționalitate pentru modal
function handleModal() {
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".close-btn");
  const openModalBtns = document.querySelectorAll("#open-modal-btn");
  let lastFocusedElement = null;

  // Funcție pentru a deschide modalul
  function openModal() {
    if (modal) {
      lastFocusedElement = document.activeElement; // Salvează elementul activ
      modal.classList.add("is-visible"); // Afișăm modalul
      modal.setAttribute("aria-hidden", "false"); // Accesibilitate
      closeModalBtn.focus(); // Mutăm focusul pe butonul de închidere
    }
  }

  // Funcție pentru a închide modalul
  function closeModal() {
    if (modal) {
      modal.classList.remove("is-visible"); // Ascundem modalul
      modal.setAttribute("aria-hidden", "true"); // Accesibilitate
      if (lastFocusedElement) {
        lastFocusedElement.focus(); // Revenim la butonul care a deschis modalul
      }
    }
  }

  // Eveniment pentru butonul de închidere
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  // Evenimente pentru butoanele care deschid modalul
  if (openModalBtns.length > 0) {
    openModalBtns.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
  }

  // Închidere modal prin clic în afara conținutului
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // Închidere modal prin tasta "Escape"
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });
}

// Funcționalitate pentru meniul burger
function handleBurgerMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Gestionăm clicurile pe butonul burger
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active"); // Afișăm/ascundem meniul
    });
  }

  // Resetează meniul la redimensionarea ferestrei (pe desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active"); // Ascunde meniul pe desktop
    }
  });
}

// Inițializăm toate funcționalitățile
function init() {
  handleModal();
  handleBurgerMenu();
}

// Asigurăm inițializarea după încărcarea paginii
document.addEventListener("DOMContentLoaded", init);
