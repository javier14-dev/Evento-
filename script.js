const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', () => {
  alert('¡Yay! ¡Nos vemos en la chorizada! 🎉🌭');
});