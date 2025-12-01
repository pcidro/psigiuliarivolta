const sections = document.querySelectorAll(".js-scroll");

export function animaScroll() {
  const windowMetade = window.innerHeight * 0.6;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowMetade) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);
