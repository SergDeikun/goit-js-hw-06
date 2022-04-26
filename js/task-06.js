const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", hendleBlurInput);
refs.input.addEventListener("focus", removeClass);

function removeClass() {
  if (refs.input.classList.contains("valid")) {
    refs.input.classList.remove("valid");
  }
  if (refs.input.classList.contains("invalid")) {
    refs.input.classList.remove("invalid");
  }
}

function hendleBlurInput(event) {
  const dataLength = Number(refs.input.dataset.length);
  const inputLength = event.currentTarget.value.length;

  if (dataLength === inputLength) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
