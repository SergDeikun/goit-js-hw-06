const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", hendleBlurInput);

function hendleBlurInput(event) {
  const dataLength = Number(refs.input.dataset.length);
  const inputLength = event.currentTarget.value.length;

  if (dataLength === inputLength) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
