const directoryURL = "https://github.com/jayhklasiq/wdd230/blob/master/chamber/data/members.json";
const page = document.querySelector('directory-main')
document.getElementById('view-toggle').addEventListener('change', async function () {
    let view = this.value;
    await displayMembersView(view);
});

async function displayMembersView(view) {
    let members = []; // Load members data from the JSON source
    // Fetch JSON data
    const response = await fetch(directoryURL);
    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        members = data.members;
        renderMembersView(view);
    }
    else {
        console.error('Error fetching member data');
    }
}

function renderMembersView(view) {
    let container = document.getElementById('members-container');
    container.innerHTML = '';

    if (view === 'grid') {
        let gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        members.forEach(function (member) {
            let card = createMemberCard(member);
            gridContainer.appendChild(card);
        });

        container.appendChild(gridContainer);
    } else if (view === 'list') {
        let listContainer = document.createElement('div');
        listContainer.className = 'list-container';

        members.forEach(function (member) {
            let listItem = createMemberListItem(member);
            listContainer.appendChild(listItem);
        });

        container.appendChild(listContainer);
    }
}

function createMemberCard(member) {
    let card = document.createElement('div');
    card.className = 'member-card';

    // Build the member card HTML structure using the member object properties
    let html = '<h2>' + member.name + '</h2>' +
        '<p>' + member.address + '</p>' +
        '<p>Phone: ' + member.phone + '</p>' +
        '<p>Website: <a href="' + member.website + '">' + member.website + '</a></p>' +
        '<img src="' + member.image + '" alt="Company Logo">' +
        '<p>Membership Level: ' + member.membershipLevel + '</p>' +
        '<p>' + member.otherInfo + '</p>';

    card.innerHTML = html;
    return card;
}

function createMemberListItem(member) {
    let listItem = document.createElement('div');

    // Build the list item HTML structure using the member object properties
    let html = '<h3>' + member.name + '</h3>' +
        '<p>' + member.address + '</p>' +
        '<p>Phone: ' + member.phone + '</p>' +
        '<p>Website: <a href="' + member.website + '">' + member.website + '</a></p>' +
        '<p>Membership Level: ' + member.membershipLevel + '</p>' +
        '<p>' + member.otherInfo + '</p>';

    listItem.innerHTML = html;
    return listItem;
}

// Initialize view as 'grid' or 'list'
displayMembersView('grid');