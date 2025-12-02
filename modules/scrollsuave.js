export default function scrollToSection() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function handleScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const section =
      href === "#" ? document.documentElement : document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", handleScroll);
  });
}
