// Dynamically populate the current year
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Populate the last modified date
const lastModifiedElement = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;

// Th following code controls the hanburger button
const navBtn = document.querySelector(".nav-menu");
const menu = document.querySelector('.navigation')
// Adding a hamburger menu
navBtn.addEventListener('click', () => {
	menu.classList.toggle('open');
	navBtn.classList.toggle('open');
});

function darkmode() {
	main.style.background = "#000";
	main.style.color = "#fff";
	modeButton.textContent = "Dark Mode Off";
}

function lightmode() {
	main.style.background = "#eee";
	main.style.color = "#000";
	modeButton.textContent = "Dark Mode";
}

const modeButton = document.querySelector(".mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent === "Dark Mode") {
		darkmode()
	}
	else if (modeButton.textContent === "Dark Mode Off") {
		lightmode()
	}
});

// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("Dark Mode")) {
// 		main.style.background = "#000";
// 		main.style.color = "#fff";
// 		modeButton.textContent = "Dark Mode Off";
// 	} 
//     else{
// 		main.style.background = "#eee";
// 		main.style.color = "#000";
// 		modeButton.textContent = "Dark Mode";
// 	}
// });
const visitCountElement = document.querySelector("#visitCount");
if (visitCountElement) {
	// Get the visit count from localStorage or initialize it to 0
	let visitCount = localStorage.getItem("visitCount") || 0;

	// Increment the visit count
	visitCount++;

	// Update the span element with the visit count
	document.getElementById("visitCount").textContent = visitCount;

	// Store the updated visit count in localStorage
	localStorage.setItem("visitCount", visitCount);
}

// Check the password field for the same input value
const form = document.querySelector("form");
if (form) {
	const password = document.querySelector("#password");
	const rtPassword = document.querySelector("#rt-password");
	const email = document.querySelector("#email");
	const message = document.querySelector("#notify");

	form.addEventListener("submit", (event) => {
		// Prevent form submission
		event.preventDefault();

		// Check if password and re-enter password match
		if (password.value !== rtPassword.value) {
			message.textContent = "Passwords do not match!";
			message.style.visibility = "visible";
			rtPassword.style.borderLeft = "5px solid red";
			rtPassword.value = "";
			rtPassword.focus();
			return; // Stop form submission
		} else {
			message.style.visibility = "hidden";
			rtPassword.style.borderLeft = " 5px solid #a3b18a";
		}

		// Check if email has a "@byui.edu" domain
		const emailRegex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
		if (!emailRegex.test(email.value)) {
			message.textContent = "Invalid email address! Please enter a valid @byui.edu email.";
			message.style.visibility = "visible";
			email.style.borderLeft = "5px solid red";
			email.value = "";
			email.focus();
			return; // Stop form submission
		} else {
			message.style.visibility = "hidden";
			email.style.borderLeft = "5px solid #a3b18a";
		}

		// If all validations pass, submit the form
		form.submit();
	});
	const pageRange = document.getElementById("range");
	const displayRange = document.getElementById("displayRange");
	pageRange.addEventListener("change", displayRatingValue);
	pageRange.addEventListener("input", displayRatingValue);

	function displayRatingValue() {
		displayRange.innerHTML = pageRange.value;

	}
}

























// const password = document.querySelector("#password");
// const rtPassword = document.querySelector("#rt-password");
// const message = document.querySelector("#notify");

// rtPassword.addEventListener("click", checkPassword);
// function checkPassword() {
// 	if (password.value != rtPassword.value) {
// 		message.textContent = "Passwords do not match!";
// 		message.style.visibility = "visible";
// 		rtPassword.style.backgroundColor = "red";
// 		rtPassword.value = "";
// 		rtPassword.focus();
// 	}
// 	else {
// 		message.style.display = "none";
// 		rtPassword.style.backgroundColor == "#a3b18a";
// 	}

// 	function checkEmail() {
// 		const emailRegex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
// 		if (!emailRegex.test(email.value)) {
// 			message.textContent = "Invalid email address! Please enter a valid @byui.edu email.";
// 			message.style.visibility = "visible";
// 			email.style.borderLeft = "5px solid red";
// 			email.value = "";
// 			email.focus();
// 		} else {
// 			message.style.display = "none";
// 			email.style.borderLeft = "5px solid #a3b18a";
// 		}
// 	}
// 	rtPassword.addEventListener("emailverification", checkEmail)

// }