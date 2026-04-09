document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textShadow = "0 0 10px rgba(0,255,143,0.55)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.textShadow = "";
  });
});