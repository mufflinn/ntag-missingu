function revealGift() {
  document.querySelector('.gift-box').classList.add('hidden');
  document.getElementById('gift-content').classList.remove('hidden');
}

function spawnFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (3 + Math.random() * 3) + 's';
  document.querySelector('.flowers').appendChild(flower);

  setTimeout(() => flower.remove(), 6000);
}

// Spawn flowers every 400ms
setInterval(spawnFlower, 400);
