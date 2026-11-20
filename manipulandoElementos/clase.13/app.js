// 1. Seleccionamos el primer elemento <li> que encuentra en el documento ("item 1")
const firstItem = document.querySelector("li");
console.log("Elemento a eliminar con remove():", firstItem.textContent); // Consola: "item 1"

// El elemento se elimina directamente a sí mismo del DOM
firstItem.remove();
console.log(
	"¿firstItem sigue teniendo un padre en el DOM?:",
	firstItem.parentNode,
); // Consola: null

// 2. Seleccionamos la lista <ul> ("#listArea")
const list = document.querySelector("ul");
// Ahora el primer hijo visible de la lista es "item 2", porque "item 1" ya fue borrado
console.log(
	"Nuevo primer hijo de la lista:",
	list.firstElementChild.textContent,
); // Consola: "item 2"

// El padre (list) elimina a su primer hijo y nos devuelve la referencia del nodo eliminado
const removedItem = list.removeChild(list.firstElementChild);
console.log("Elemento devuelto por removeChild():", removedItem.textContent); // Consola: "item 2"

// Verificamos qué elementos quedaron dentro de la lista
console.log("Cantidad de elementos restantes en <ul>:", list.children.length); // Consola: 2 (quedan "item 3" e "item 4")
