const container = document.querySelector(".container");
const button = document.querySelector("#btn");

container.addEventListener("mouseover", () => {
	console.log("Mouse over event triggered");
	container.style.backgroundColor = "blue";
});
container.addEventListener("mouseout", () => {
	console.log("Mouse out event triggered");
	container.style.backgroundColor = "red";
});

// button.addEventListener("click", () => {
// 	console.log("Button click event triggered");
// 	alert("Button clicked!");
// });

const buttonClickCallback = () => {
	console.log("Button click event triggered");
	alert("Button clicked!");
};

button.addEventListener("click", buttonClickCallback);
console.log("Button click event listener added");

setTimeout(() => {
	button.removeEventListener("click", buttonClickCallback);
	console.log("Button click event listener removed");
}, 2000);
