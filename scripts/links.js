// Define the base URL for your WDD230 repository
const baseURL = "https://github.com/jayhklasiq/wdd230";

// Define the URL for the links.json data file
const linksURL = "data/links.json";
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayLinks(data.weeks);
    } else {
      throw new Error("Failed to fetch links");
    }
  } catch (error) {
    console.log(error);
  }
}
function displayLinks(weeks) {
  const activitiesList = document.querySelector(".learnings ul");
  activitiesList.innerHTML = "";
  weeks.forEach((week, index) => { // Add an index parameter to the forEach loop
    const listItem = document.createElement("li");
    listItem.classList.add("la");
    listItem.textContent = `Week ${index + 1}: `; // Increment the index by 1 to start from 1

    week.links.forEach((link, i) => { // Update the parameter name to avoid confusion with the outer loop
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.title;

      if (i < week.links.length - 1) {
        listItem.appendChild(anchor);
        listItem.appendChild(document.createTextNode(" | "));
      } else {
        listItem.appendChild(anchor);
      }
    });

    activitiesList.appendChild(listItem);
  });
}


getLinks();