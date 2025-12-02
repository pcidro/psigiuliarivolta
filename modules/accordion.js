const initializeAccordion = () => {
  const acc = document.getElementsByClassName("accordion-btn");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      for (let j = 0; j < acc.length; j++) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }

      if (!isActive) {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

export default initializeAccordion;
