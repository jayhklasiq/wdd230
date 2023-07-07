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
const menu = document.querySelector(".navigation");
// Adding a hamburger menu
navBtn.addEventListener("click", () => {
	menu.classList.toggle("open");
	navBtn.classList.toggle("open");
});

const discovery = document.querySelector(".discovery-main");
if (discovery) {
	document.addEventListener("DOMContentLoaded", function () {
		// Get the current date (without time)
		let currentDate = new Date().toLocaleDateString();

		// Retrieve the last visit date from localStorage
		let lastVisit = localStorage.getItem("lastVisit");

		// Set the current date as the last visit date in localStorage
		localStorage.setItem("lastVisit", currentDate);

		// Calculate the time difference between visits
		let timeDiff = 0;
		if (lastVisit) {
			let prevVisit = new Date(lastVisit).toLocaleDateString();
			timeDiff = Math.floor(
				(new Date(currentDate) - new Date(prevVisit)) / (1000 * 60 * 60 * 24)
			);
		}

		// Get the sidebar content element
		let sidebarContent = document.querySelector(".message");

		// Display appropriate message based on the time between visits
		if (!lastVisit) {
			sidebarContent.innerHTML =
				"<p>Welcome! Let us know if you have any questions.</p>";
		} else if (timeDiff < 1) {
			sidebarContent.innerHTML = "<p>Back so soon! Awesome!</p>";
		} else {
			let daysText = timeDiff === 1 ? "day" : "days";
			sidebarContent.innerHTML =
				"<p>You last visited " + timeDiff + " " + daysText + " ago.</p>";
		}
	});
}

const form = document.querySelector("form");
if (form) {
	document.getElementById("timestamp").value = new Date().toISOString();
}
