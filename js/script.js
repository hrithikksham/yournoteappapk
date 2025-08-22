// Generate random stars
function createStarfield() {
  const starfield = document.getElementById("starfield");
  const numStars = 120;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = star.style.height = Math.random() * 3 + 1 + "px";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starfield.appendChild(star);
  }
}

// Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Init
window.addEventListener("load", createStarfield);

// Aurora parallax
window.addEventListener("scroll", () => {
  const aurora = document.querySelector(".aurora");
  const scrolled = window.pageYOffset;
  if (aurora) {
    aurora.style.transform = `rotate(${scrolled * 0.1}deg)`;
  }
});
