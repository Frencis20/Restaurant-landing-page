// Basic hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

if (hamburger && navLinks && overlay) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
  });
}

// Initialize ScrollReveal
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 800,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  scale: 0.9,
  mobile: false,
});

// Apply ScrollReveal animations to elements in the hero section
ScrollReveal().reveal(".hero-content .hero-title", { origin: "top" });

ScrollReveal().reveal(".hero-content .hero-subtitle", {
  origin: "top",
  delay: 300,
});

ScrollReveal().reveal(".hero-content .hero-button", {
  origin: "bottom",
  delay: 500,
});

ScrollReveal().reveal(".hero-image", { origin: "right", delay: 700 });
