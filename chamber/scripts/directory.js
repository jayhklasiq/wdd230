const directoryURL = "data/members.json";
const memberCard = document.querySelector("#memberCard");

function MakeGridCard(member) {
  const gridCard = document.createElement('div');
  gridCard.setAttribute('class', 'grid');

  const img = document.createElement('img');
  img.setAttribute('src', member.image);
  img.setAttribute('alt', member.name);
  img.setAttribute('loading', 'lazy');
  gridCard.appendChild(img);

  const address = document.createElement('address');
  address.textContent = member.address;
  gridCard.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = member.phone;
  gridCard.appendChild(phone);

  const website = document.createElement('a');
  website.setAttribute('href', member.website);
  website.setAttribute('target', '_blank');
  website.textContent = member.website;
  gridCard.appendChild(website);

  return gridCard;
}

function MakeListCard(members) {
  const tr = document.createElement('tr');

  const nameTd = document.createElement('td');
  nameTd.className = 'name';
  const nameText = document.createTextNode(members.name);
  nameTd.appendChild(nameText);
  tr.appendChild(nameTd);

  const addressTd = document.createElement('td');
  addressTd.className = 'list-address';
  const addressText = document.createTextNode(members.address);
  addressTd.appendChild(addressText);
  tr.appendChild(addressTd);

  const phoneTd = document.createElement('td');
  phoneTd.className = 'list-number';
  const phoneText = document.createTextNode(members.phone);
  phoneTd.appendChild(phoneText);
  tr.appendChild(phoneTd);

  const websiteTd = document.createElement('td');
  const websiteLink = document.createElement('a');
  websiteLink.href = members.website;
  websiteLink.target = '_blank';
  const websiteText = document.createTextNode(members.website);
  websiteLink.appendChild(websiteText);
  websiteTd.appendChild(websiteLink);
  tr.appendChild(websiteTd);

  return tr;
}


async function getmembers() {
  const response = await fetch(directoryURL);
  const data = await response.json();
  console.log(data);
  ListView(data.members);

  document.querySelector("#grid").addEventListener("click", () => GridView(data.members));
  document.querySelector("#list").addEventListener("click", () => ListView(data.members));
}

function ListView(members) {
  // Change button color to currently active
  const gridBtn = document.querySelector("#grid");
  const listBtn = document.querySelector("#list");

  gridBtn.style.backgroundColor = "";
  listBtn.style.backgroundColor = "#A9D6E5";

  // Clear the memberCard container
  memberCard.innerHTML = "";

  // Create a table element
  const table = document.createElement("table");
  table.className = "list";

  // Create table body
  const tbody = document.createElement("tbody");

  // Iterate over members and create table rows
  members.forEach(member => {
    const row = MakeListCard(member);
    tbody.appendChild(row);
  });

  // Append tbody to the table
  table.appendChild(tbody);

  // Append the table to the memberCard container
  memberCard.appendChild(table);
}

function GridView(members) {
  const gridBtn = document.querySelector("#grid");
  const listBtn = document.querySelector("#list");

  gridBtn.style.backgroundColor = "#A9D6E5";
  listBtn.style.backgroundColor = "";

  memberCard.innerHTML = "";

  const section = document.createElement('section');

  members.forEach(member => {
    const card = MakeGridCard(member);
    section.appendChild(card);
    card.className = "grid";
  });
  memberCard.appendChild(section);
}

getmembers();
