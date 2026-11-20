// --- CLONE NODE ---

// Seleccionamos los elementos con id="contentArea" (devuelve una NodeList)
const contentArea = document.querySelectorAll("#contentArea");
console.log("Área seleccionada: " + contentArea[0].outerHTML);
// Consola: <section id="contentArea"><p>Texto dentro de un contenedor.</p></section>

// Seleccionamos el párrafo original dentro de esa sección
const originalP = contentArea[0].querySelector("p");
console.log("Elemento original: " + originalP.outerHTML);
// Consola: <p>Texto dentro de un contenedor.</p>

// Clonamos el párrafo en memoria; 'true' copia también su nodo de texto hijo
const cloneP = originalP.cloneNode(true);
console.log("Elemento clonado: " + cloneP.outerHTML);
// Consola: <p>Texto dentro de un contenedor.</p>

// Insertamos el clon al final de #contentArea (ahora hay dos párrafos iguales)
contentArea[0].appendChild(cloneP);
console.log(
	"Área de contenido después de agregar el clon: " + contentArea[0].outerHTML,
);
// Consola: <section id="contentArea"><p>Texto dentro de un contenedor.</p><p>Texto dentro de un contenedor.</p></section>

// Modificamos el texto del clon; el original permanece intacto porque son nodos independientes
cloneP.textContent = "Este es el texto del clon";
console.log(
	"Área de contenido después de modificar el clon: " + contentArea[0].outerHTML,
);
// Consola: <section id="contentArea"><p>Texto dentro de un contenedor.</p><p>Este es el texto del clon</p></section>

// --- REPLACE WITH ---

// Seleccionamos la lista <ul> y su tercer hijo (índice 2 -> "item 3")
const listArea = document.querySelector("#listArea");
const itemToReplace = listArea.children[2];
console.log("Elemento a reemplazar: " + itemToReplace.outerHTML);
// Consola: <li>item 3</li>

// Reemplazamos "item 3" con el nodo cloneP (esto saca a cloneP de #contentArea y lo mueve aquí)
itemToReplace.replaceWith(cloneP);
console.log(
	"Área de lista después de reemplazar el elemento: " + listArea.outerHTML,
);
// Consola: <ul id="listArea"><li>item 1</li><li>item 2</li><p>Este es el texto del clon</p><li>item 4</li></ul>

// Si revisamos #contentArea ahora, veremos que cloneP ya no está ahí porque se movió a la lista
console.log("Estado final de #contentArea: " + contentArea[0].outerHTML);
// Consola: <section id="contentArea"><p>Texto dentro de un contenedor.</p></section>
