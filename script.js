const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");
const topBtn = document.querySelector("#topBtn");
const glow = document.querySelector(".cursor-glow");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "grid" : "none";
});

topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
