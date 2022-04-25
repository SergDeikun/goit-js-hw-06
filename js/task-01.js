const refs = {
  liEl: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.liEl.length}`);

refs.liEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
