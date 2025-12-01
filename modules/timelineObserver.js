export function initTimelineObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
  };

  let delay = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("active")) {
        delay += 500;

        setTimeout(() => {
          entry.target.classList.add("active");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => observer.observe(item));
}
