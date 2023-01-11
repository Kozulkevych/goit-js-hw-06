const inputRef = document.querySelector('#validation-input');



inputRef.addEventListener('blur', event => {
    inputRef.classList.add('invalid');
    if (event.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    // console.log(event.target.value.length);
    // console.log(Number(inputRef.dataset.length));
 });
// function onInputRefFocus() { };
// function onInputRefBlur() { };

