
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    if (event.target.email.value === '' || event.target.password.value === '') {
        return alert('Please fill in all the fields!')
  };
  const dataForm = { Email: event.target.email.value, Password: event.target.password.value };
  console.log(dataForm);
  formRef.reset();
};
