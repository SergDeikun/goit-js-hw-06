const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", hendleFormSubmit);

function hendleFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const formEmail = formElements.email.value;
  const formPassword = formElements.password.value;

  if (formEmail === "") {
    alert("please enter your email");
  }
  if (formPassword === "") {
    alert("please enter your password");
  } else {
    const formData = {
      formEmail,
      formPassword,
    };
    console.log(formData);
  }

  refs.form.reset();
}
