// hamburguer.js

export const openMenu = (menuToggle, mobileMenu, backdrop) => {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  backdrop.classList.add("is-visible");
  backdrop.removeAttribute("hidden");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
};

export const closeMenu = (menuToggle, mobileMenu, backdrop) => {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  backdrop.classList.remove("is-visible");
  backdrop.setAttribute("hidden", "");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};

export function initMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.querySelector(".close-menu");
  const backdrop = document.querySelector(".backdrop");
  const navLinks = document.querySelectorAll(".nav-mobile .nav-link");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () =>
    openMenu(menuToggle, mobileMenu, backdrop)
  );

  closeMenuButton.addEventListener("click", () =>
    closeMenu(menuToggle, mobileMenu, backdrop)
  );

  backdrop.addEventListener("click", () =>
    closeMenu(menuToggle, mobileMenu, backdrop)
  );

  navLinks.forEach((link) =>
    link.addEventListener("click", () =>
      closeMenu(menuToggle, mobileMenu, backdrop)
    )
  );
}
