const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

document.querySelector("#name-input").placeholder = "Anonymous";

refs.input.addEventListener("input", handlerInputChange);

function handlerInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
}
