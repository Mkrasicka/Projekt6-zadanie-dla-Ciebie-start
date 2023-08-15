const input = document.querySelector('input');
const btnAdd = document.querySelector("button.add");
const btnDelete = document.querySelector("button.clean");

const btnShowAdvice = document.querySelector("button.showAdvice");
const btnShowOptions = document.querySelector("button.showOptions");
const h1 = document.querySelector('h1');

let options = ["opcja"];

// arrow function
const add = (e) => {
  // button jest w formularzu dlatego prevent default
  e.preventDefault();

  if (input.value.length) {
    const newAdvice = input.value;
    for (option of options) {
      if (newAdvice === option) {
        input.value = "";
        alert(`${newAdvice} is already used`)
        return
      }
    }
    alert(`${newAdvice} is added to options`)
    options.push(newAdvice);

    input.value = "";
  }


}

btnAdd.addEventListener("click", add)

btnDelete.addEventListener("click", function (e) {
  e.preventDefault();
    options.length = 0;
});

btnShowAdvice.addEventListener("click", function () {
  const index = Math.floor(Math.random() * options.length);
  const option = options[index];

  h1.textContent = option;
});

btnShowOptions.addEventListener('click', function () {

  alert(options.join("------ ------"));
  h1.textContent = "";
});
