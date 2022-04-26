const menuIcon = document.getElementById("menu-icon");
const productsLink = document.getElementById("products");
const menuContainer = document.getElementById("menu-container");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
	menuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
	menuContainer.classList.remove("active");
});

productsLink.addEventListener("click", () => {
	menuContainer.classList.add("active");
});
