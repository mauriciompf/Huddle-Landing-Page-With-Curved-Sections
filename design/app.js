const emailInput = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");
const header = document.querySelector(".header-content");
let scrollNumber = 30
let validCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

window.onscroll = function() {
	if (window.pageYOffset > scrollNumber) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
};

emailInput.addEventListener("blur", function() {
	if (!validCharacters.test(emailInput.value)) {
		emailInput.classList.add("error");
		errorMessage.style.display = "inline";
	} else {
		emailInput.classList.remove("error");
		errorMessage.style.display = "none";
	}
});