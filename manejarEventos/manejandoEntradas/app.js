const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	console.log("Nombre:", name);
	console.log("Correo:", email);
});
