const input = document.querySelector("input");
console.log("Elemento input:", input);

// console.dir(input);

const inputValue = input.value;
console.log("Valor del input:", inputValue);

input.value = "Nuevo valor";
console.log("Valor del input después de cambiarlo:", input.value);
