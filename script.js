function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.getElementById("message").classList.remove("hidden");
  typeWriter();
  launchConfetti(); // <-- Add this line
}

function launchConfetti() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

const text =
  "Wishing you a day filled with love, laughter, and your favorite cake! You're the best dad ever 💙";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

// Slideshow
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

let currentImage = 0;

function startSlideshow() {
  const slideShow = document.getElementById("slideshow");
  slideShow.classList.remove("hidden");

  const img = document.getElementById("slideImage");
  img.src = images[0]; // Show first image

  let currentImage = 1;

  const interval = setInterval(() => {
    if (currentImage >= images.length) {
      clearInterval(interval); // Stop after last image
      return;
    }

    img.src = images[currentImage];
    currentImage++;
  }, 5000); // 5000ms = 5 seconds per photo
}
window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic");

  // Play music after user interaction
  document.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch((e) => console.log("Autoplay failed:", e));
    }
  });
});
