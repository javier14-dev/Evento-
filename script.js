const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Función para mover el botón "No"
function moverBoton() {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

// Para laptops / PC
noBtn.addEventListener('mouseover', moverBoton);

// Para celulares / tablets
noBtn.addEventListener('touchstart', moverBoton);

// Mensaje divertido al dar clic en "Sí"
yesBtn.addEventListener('click', () => {
  alert('¡Yay! ¡Nos vemos en la chorizada! 🎉🌭');
});