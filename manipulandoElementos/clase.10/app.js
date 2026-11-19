// const contentArea = document.querySelector("#contentArea");
// contentArea.innerHTML = "<p>Nuevo contenido dentro del contenedor.</p>";

// contentArea.insertAdjacentHTML(
// 	"beforeend",
// 	"<p>Contenido insertado al final del contenedor.</p>",
// );

const listArea = document.querySelector("#listArea");
// innerHTML se utiliza para modificar el contenido HTML de un elemento. Pero vuelve a hacer todo el renderizado del contenido existente, lo que puede ser ineficiente si solo quieres agregar un nuevo elemento.
listArea.innerHTML += "<li>item 5</li>";
// insertAdjacentHTML se utiliza para insertar contenido HTML en una posición específica dentro de un elemento, sin volver a renderizar todo el contenido existente.
listArea.insertAdjacentHTML("beforeend", "<li>item 6</li>");
