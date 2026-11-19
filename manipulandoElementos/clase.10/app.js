const contentArea = document.querySelector("#contentArea");
contentArea.innerHTML = "<p>Nuevo contenido dentro del contenedor.</p>";

contentArea.insertAdjacentHTML(
	"beforeend",
	"<p>Contenido insertado al final del contenedor.</p>",
);
