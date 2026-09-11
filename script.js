document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("particles");

  if (!container) {
    return;
  }

  /*
    نخلي عدد الجسيمات قليل حتى يبقى
    الموقع سريع وسلس على الهواتف.
  */

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  const particleCount = isMobile ? 10 : 18;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.bottom = `${Math.random() * -20}%`;

    particle.style.setProperty("--drift", `${Math.random() * 35 - 17}px`);

    particle.style.setProperty("--duration", `${Math.random() * 8 + 9}s`);

    particle.style.animationDelay = `${Math.random() * 8}s`;

    container.appendChild(particle);
  }
});
