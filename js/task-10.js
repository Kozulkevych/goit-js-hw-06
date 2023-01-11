function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnDestroyRef = document.querySelector('[data-destroy]');
const btnCreateRef = document.querySelector('[data-create]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
	const elementsToAdd = [];
	for (let i = 1; i <= amount; i += 1) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	};
	return elementsToAdd
};

btnCreateRef.addEventListener('click', () => {
	const boxesToAdd = createBoxes(inputRef.value)
	boxesRef.append(...boxesToAdd)
});

btnDestroyRef.addEventListener('click', () => {
	boxesRef.innerHTML = ''
	inputRef.value = ''
});


// const createBoxes = (amount) => {
// 	amount = inputRef.value;
// 	let size = 30;
// 	let markup = "";
// 	for (let i = 1; i <= amount; i += 1) {
// 		markup += `<div style = "height:${size}px; width:${size}px; background: ${getRandomHexColor()}"><div>`;
// 		size += 10;
// 	}
// 	boxesRef.insertAdjacentHTML("beforeend", markup);
// };
// const destroyBoxes = () => {
// 	boxesRef.innerHTML = "";
// 	inputRef.value = "";
// };
// btnCreateRef.addEventListener('click', createBoxes);
// btnDestroyRef.addEventListener('click', destroyBoxes);


// const createBoxes = (amount) => {
// 	const size = 30
// 	const step = 10
// 	const initialArray = new Array(amount).fill('')
// 	return initialArray
// 		.map((el, index) => {
// 			return `<div style = "width:${size + step * (index + 1)}px;
// 	   height:${size + step * (index + 1)}px;
// 	   background: ${getRandomHexColor()}"></div>`
// 		})
// };

// const onCreateBoxes = () => {
// 	const amount = Number(inputRef.value)
// 	boxesRef.innerHTML += createBoxes(amount).join('')
// };

// const onDestroyBoxes = () => {
// 	boxesRef.innerHTML = ''
// 	inputRef.value = ''
// };

// btnCreateRef.addEventListener('click', onCreateBoxes);
// btnDestroyRef.addEventListener('click', onDestroyBoxes);



