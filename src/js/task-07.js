const inputRef = document.querySelector('input#font-size-control');
const abracadabraRef = document.querySelector('span#text');

inputRef.addEventListener('change', event => {
    abracadabraRef.style.fontSize = `${event.target.value}px`
});

