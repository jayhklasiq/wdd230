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
  const learningsList = document.querySelectorAll('.la');
  weeks.forEach((week, index) => {
    const listItem = learningsList[index];
    listItem.innerHTML = `${week.week}: `;
    week.links.forEach((link, linkIndex) => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      if (linkIndex < week.links.length - 1) {
        listItem.appendChild(document.createTextNode(' | '));
      }
    });
  });
}

getLinks();