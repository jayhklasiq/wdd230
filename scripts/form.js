// Check the password field for the same input value
const form = document.querySelector("form");
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
        rtPassword.style.backgroundColor = "red";
        rtPassword.value = "";
        rtPassword.focus();
        return; // Stop form submission
    } else {
        message.style.visibility = "hidden";
        rtPassword.style.backgroundColor = "#a3b18a";
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