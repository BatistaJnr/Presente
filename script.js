
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);
showSlide(current);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 500);

const musica = document.getElementById('musica');

// Adiciona evento para toque na tela ou clique
document.body.addEventListener('click', tocarMusica);
document.body.addEventListener('touchstart', tocarMusica);

function tocarMusica() {
  musica.play()
    .then(() => {
      console.log("Música tocando");
    })
    .catch((e) => {
      console.error("Erro ao tentar tocar a música:", e);
    });
    
   // Remove os eventos para não tocar de novo se tocar outra vez
    document.body.removeEventListener('click', tocarMusica);
    document.body.removeEventListener('touchstart', tocarMusica);
    }
