const cart_ready_main = document.querySelector(".cart_ready");
const submit = document.getElementById("submit");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const buttons = document.querySelectorAll(".botton");
const parrafo = document.getElementById("parrafo");
let value = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    value = e.target.value;
    if (value) {
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", "");
    }
  });
});

submit.addEventListener("click", cambio);

reset.addEventListener("click", resetear);

function cambio() {
  if (value) {
    container.style.display = "none";
    cart_ready_main.style.display = "flex";
    parrafo.innerHTML = `You selected ${value} out of 5`;
    submit.setAttribute("disabled", "");
  }
}

function resetear() {
  container.style.display = "flex";
  cart_ready_main.style.display = "none";
  submit.setAttribute("disabled", "");
}
