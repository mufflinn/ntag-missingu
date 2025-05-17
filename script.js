const giftButton = document.getElementById('gift-button');
const gifContainer = document.getElementById('gif-container');

giftButton.addEventListener('click', () => {
  if (gifContainer.style.display === 'none' || gifContainer.style.display === '') {
    gifContainer.style.display = 'block';
    giftButton.style.display = 'none';
  }
});
