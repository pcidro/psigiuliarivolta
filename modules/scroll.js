const sections = document.querySelectorAll(".js-scroll");

export function animaScroll() {
  const windowMetade = window.innerHeight * 0.5;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowMetade) {
      section.classList.add("ativo");

      const anim = section.dataset.anim;
      if (anim) {
        section.classList.add("animate__animated", anim);
      }
    }
  });
}

window.addEventListener("scroll", animaScroll);
