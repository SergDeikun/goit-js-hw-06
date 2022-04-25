const counterValue = {
  value: 0,

  minus() {
    this.value -= 1;
  },

  plus() {
    this.value += 1;
  },
};

const refs = {
  minusBtn: document.querySelector('[data-action="decrement"]'),
  plusBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

const handleDecrement = () => {
  counterValue.minus();
  refs.valueEl.textContent = counterValue.value;
};

const handleIncrement = () => {
  counterValue.plus();
  refs.valueEl.textContent = counterValue.value;
};

refs.minusBtn.addEventListener("click", handleDecrement);
refs.plusBtn.addEventListener("click", handleIncrement);
