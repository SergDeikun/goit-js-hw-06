const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", hendleChangeColorBody);

function hendleChangeColorBody() {
  const spanColor = (document.body.style.backgroundColor = getRandomHexColor());

  refs.span.textContent = spanColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
