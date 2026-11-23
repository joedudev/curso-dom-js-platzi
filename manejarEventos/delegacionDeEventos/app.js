// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
// 	item.addEventListener("click", (event) => {
// 		// console.log(event.target.textContent);
// 		event.target.classList.toggle("highlight");
// 	});
// });

// Delegation Pattern
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
	if (event.target.closest("li")) {
		event.target.closest("li").classList.toggle("highlight");
	}
});
