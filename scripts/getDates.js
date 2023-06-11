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

function darkmode(){
	main.style.background = "#000";
	main.style.color = "#fff";
	modeButton.textContent = "Dark Mode Off";
}

function lightmode(){
	main.style.background = "#eee";
	main.style.color = "#000";
	modeButton.textContent = "Dark Mode";
}

const modeButton = document.querySelector(".mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {  
  if (modeButton.textContent === "Dark Mode")
	{
    darkmode()
  	} 
  else if (modeButton.textContent === "Dark Mode Off")
	{
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



