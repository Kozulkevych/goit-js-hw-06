function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body')
const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  spanRef.textContent = currentColor;
});