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

const form = document.querySelector(".join-main");
if (form) {
	document.getElementById("timestamp").value = new Date().toISOString();
}

const weatherCard = document.querySelector('.weather-card');
if (weatherCard) {
	const currentTemp = document.querySelector('.temperature');
	const weatherIcon = document.querySelector('.weather-img');
	let captionDesc = document.querySelector('figcaption');

	const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.5681359394105298&lon=-0.1935976015832197&appid=7c71213c74f3ed66fde3c04f0ecec19c';
	async function apiFetch(url) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				// console.log(data);
				displayResults(data);
			} else {
				throw new Error("API request failed");
			}
		} catch (error) {
			console.log(error);
			console.log("There is an error fetching weather data.")
		}
	}
	function displayResults(data) {
		currentTemp.innerHTML = `${data.main.temp}&deg;F`;
		const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		let desc = data.weather[0].description;
		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute('alt', desc);
		weatherIcon.setAttribute('width', '50px')
		captionDesc.textContent = `${desc}`;
	}
	apiFetch(url);


	// Function to generate random number within a range
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Function to display the banner
	function displayBanner() {
		const banner = document.getElementById("banner");
		let today = new Date();
		let dayOfWeek = today.getDay();
		if (dayOfWeek >= 1 && dayOfWeek <= 3) {
			banner.style.display = "block";
		}
	}

	// Function to close the banner
	function closeBanner() {
		const banner = document.getElementById("banner");
		banner.style.display = "none";
	}

	// Function to load spotlight advertisements
	async function loadAdvertisements() {
		const adContainer = document.getElementById("ad-container")
		try {
			// Fetch the members data from the JSON file
			const response = await fetch("data/members.json");
			const data = await response.json();

			let qualifiedMembers = data.members.filter(function (member) {
				return member.membershipLevel === "Silver" || member.membershipLevel === "Gold";
			});

			for (let i = 0; i < 2; i++) {
				let randomIndex = getRandomNumber(0, qualifiedMembers.length - 1);
				const member = qualifiedMembers[randomIndex];

				const ad = document.createElement("div");
				ad.className = "ad";
				ad.innerHTML = member.name;
				adContainer.appendChild(ad);

				qualifiedMembers.splice(randomIndex, 1);
			}
		} catch (error) {
			console.error("Failed to load members data:", error);
		}
	}

	// Load advertisements and display the banner on page load
	window.onload = function () {
		loadAdvertisements();
		displayBanner();
	};
}


const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.57&lon=-0.2&appid=7c71213c74f3ed66fde3c04f0ecec19c';

async function weatherForecast(forecast) {
	try {
		const response = await fetch(forecast);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			// displayResults(data)
		} else {
			throw new Error("API request failed");
		}
	} catch (error) {
		console.log(error);
		console.log("There is an error fetching weather data.")
	}
}
weatherForecast();
