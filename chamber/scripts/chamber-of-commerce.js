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


document.addEventListener('DOMContentLoaded', function () {
  // Get the current date
  let currentDate = new Date();

  // Retrieve the last visit date from localStorage
  let lastVisit = localStorage.getItem('lastVisit');

  // Set the current date as the last visit date in localStorage
  localStorage.setItem('lastVisit', currentDate.toISOString());

  // Calculate the time difference between visits
  let timeDiff = 0;
  if (lastVisit) {
    let prevVisit = new Date(lastVisit);
    timeDiff = Math.floor((currentDate - prevVisit) / (1000 * 60 * 60 * 24));
  }

  // Get the sidebar content element
  let sidebarContent = document.querySelector('.message');

  // Display appropriate message based on the time between visits
  if (!lastVisit) {
    sidebarContent.innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
  } else if (timeDiff < 1) {
    sidebarContent.innerHTML = '<p>Back so soon! Awesome!</p>';
  } else {
    let daysText = timeDiff === 1 ? 'day' : 'days';
    sidebarContent.innerHTML = '<p>You last visited ' + timeDiff + ' ' + daysText + ' ago.</p>';
  }
});

