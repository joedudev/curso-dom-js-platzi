const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

// Carga las tareas almacenadas al iniciar la página.
loadTasksFromLocalStorage();

taskForm.addEventListener("submit", (event) => {
	// Evita que el formulario recargue la página.
	event.preventDefault();

	// Obtiene el texto ingresado y agrega la tarea si no está vacío.
	const taskInput = document.getElementById("task-input");

	const task = taskInput.value;

	if (task) {
		taskList.append(createTaskElement(task));
		// Almacena la tarea en Local Storage.
		storeTaskInLocalStorage(task);
		// Limpia el campo después de agregar la tarea.
		taskInput.value = "";
	}
});

/**
 * Crea un elemento de lista con el texto de la tarea y sus controles.
 * @param {string} task - Texto de la tarea.
 * @returns {HTMLLIElement} Elemento de lista creado.
 */
function createTaskElement(task) {
	const li = document.createElement("li");
	li.textContent = task;
	// Agrega los botones para borrar y editar la tarea.
	li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
	return li;
}

/**
 * Crea un control con el texto y la clase CSS indicados.
 * @param {string} text - Texto que se mostrará en el control.
 * @param {string} className - Clase CSS del control.
 * @returns {HTMLSpanElement} Control creado.
 */
function createButton(text, className) {
	const btn = document.createElement("span");
	btn.textContent = text;
	btn.className = className;
	return btn;
}

taskList.addEventListener("click", (event) => {
	// Identifica el control pulsado y ejecuta la acción correspondiente.
	if (event.target.classList.contains("delete-btn")) {
		deleteTask(event.target.parentElement);
	} else if (event.target.classList.contains("edit-btn")) {
		editTask(event.target.parentElement);
	}
});

/**
 * Solicita confirmación y elimina la tarea seleccionada.
 * @param {HTMLLIElement} taskItem - Elemento de tarea que se eliminará.
 */
function deleteTask(taskItem) {
	if (confirm("Estas seguro de borrrar este elemento?")) {
		taskItem.remove();
	}
}

/**
 * Solicita un nuevo texto y actualiza la tarea si se ingresó uno.
 * @param {HTMLLIElement} taskItem - Elemento de tarea que se editará.
 */
function editTask(taskItem) {
	const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
	if (newTask) {
		taskItem.firstChild.textContent = newTask;
	}
}

/**
 * Guarda una tarea en la lista de tareas de Local Storage.
 * @param {string} task - Texto de la tarea que se guardará.
 * @returns {void}
 */
function storeTaskInLocalStorage(task) {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Carga las tareas guardadas en Local Storage y las muestra en la lista.
 * @returns {void}
 */
function loadTasksFromLocalStorage() {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks.forEach((task) => {
		taskList.append(createTaskElement(task));
	});
}
