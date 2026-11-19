const parent = document.getElementById("parent");
console.log("Elemento padre (#parent):", parent);

const children = parent.children;
console.log("Hijos directos del elemento padre:", children);

const firstChild = parent.firstElementChild;
console.log("Primer hijo:", firstChild);

const lastChild = parent.lastElementChild;
console.log("Último hijo:", lastChild);

const previousSibling = parent.previousElementSibling;
console.log("Elemento hermano anterior:", previousSibling);

const nextSibling = parent.nextElementSibling;
console.log("Elemento hermano siguiente:", nextSibling);

const children2 = document.querySelector("li");
console.log("Primer elemento <li> encontrado:", children2);

const nodeParent = children2.parentNode;
console.log("Elemento padre (nodo) del primer <li> encontrado:", nodeParent);

const elementParent = children2.parentElement;
console.log(
	"Elemento padre (element) del primer <li> encontrado:",
	elementParent,
);

const closestElement = children2.closest("menu");
console.log(
	"Elemento más cercano <menu> al primer <li> encontrado:",
	closestElement,
);
