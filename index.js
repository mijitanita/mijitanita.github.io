import validator from "./validator.js";

const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const number = document.getElementById("cardnumber").value;

  const valid = validator.isValid(number);
  const maski = validator.maskify(number);
  if (valid) {
    result.innerHTML = "Tarjeta Válida " + maski;
  } else {
    result.innerHTML = "Tarjeta Inválida";
  }
});
