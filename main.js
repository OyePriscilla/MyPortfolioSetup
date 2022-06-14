const menu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-icon');

const overlayLinkOne = document.querySelector('.overlay-link-one');
const overlayLinkTwo = document.querySelector('.overlay-link-two');
const overlayLinkThree = document.querySelector('.overlay-link-three');

menu.addEventListener('click', () => {
  overlay.style.display = 'block';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkOne.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkThree.addEventListener('click', () => {
  overlay.style.display = 'none';
});
