// const contentArea = document.querySelector("#contentArea");
// contentArea.innerHTML = "<p>Nuevo contenido dentro del contenedor.</p>";

// contentArea.insertAdjacentHTML(
// 	"beforeend",
// 	"<p>Contenido insertado al final del contenedor.</p>",
// );

// const listArea = document.querySelector("#listArea");
// // innerHTML se utiliza para modificar el contenido HTML de un elemento. Pero vuelve a hacer todo el renderizado del contenido existente, lo que puede ser ineficiente si solo quieres agregar un nuevo elemento.
// listArea.innerHTML += "<li>item 5</li>";
// // insertAdjacentHTML se utiliza para insertar contenido HTML en una posición específica dentro de un elemento, sin volver a renderizar todo el contenido existente.
// listArea.insertAdjacentHTML("beforeend", "<li>item 6</li>");

// Create Element

const newPElement = document.createElement("p");
newPElement.textContent = "Este es un nuevo párrafo.";
const contentArea = document.querySelector("#contentArea");
contentArea.appendChild(newPElement);

// Nuevos metodos de CreateElement: prepend, before, after, replaceWith

const newItem = document.createElement("li");
newItem.textContent = "Item 5";
const listArea = document.querySelector("#listArea");
listArea.prepend(newItem);

const newItem2 = document.createElement("li");
newItem2.textContent = "Item 6";
listArea.before(newItem2);

const newItem3 = document.createElement("li");
newItem3.textContent = "Item 7";
listArea.after(newItem3);

const newItem4 = document.createElement("li");
newItem4.textContent = "Item 8";
listArea.replaceWith(newItem4);
