const firstBox = document.getElementById('first-box');
const flowerContainer = document.getElementById('flower-container');
const secondBox = document.getElementById('second-box');

// Your flower image - replace with your portrait flower PNG link
const flowerImageURL = 'https://i.imgur.com/8P7r9Dz.png';

function createFlower(x, delay) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = x + 'px';
  flower.style.backgroundImage = `url(${flowerImageURL})`;
  flower.style.animationDelay = delay + 's';
  flowerContainer.appendChild(flower);

  // Remove flower after animation
  setTimeout(() => flower.remove(), 4000);
}

firstBox.addEventListener('click', () => {
  // Grow 5 flowers at different positions with staggered delays
  for(let i = 0; i < 5; i++) {
    createFlower(10 + i * 15, i * 0.5);
  }

  // Hide first box and show second box after a delay
  firstBox.style.display = 'none';

  setTimeout(() => {
    secondBox.style.display = 'flex';
  }, 2500);
});
