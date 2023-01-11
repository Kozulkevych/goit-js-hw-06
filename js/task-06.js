const inputRef = document.querySelector('#validation-input');

// console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', event => {
    if (event.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
    // console.log(event.target.value.length);
 });
// function onInputRefFocus() { };
// function onInputRefBlur() { };

