const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuMobile.classList.toggle("open");
});

// Fecha menu ao clicar no link
document.querySelectorAll(".menu-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuMobile.classList.remove("open");
  });
});
