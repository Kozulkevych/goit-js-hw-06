const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    nameOutputRef.textContent = inputRef.value !== '' ? inputRef.value : 'Anonymous';
});


