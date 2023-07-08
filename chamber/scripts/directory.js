const url = './data/members.json';

async function getProphetData() {
	const response = await fetch(url);
	const data = await response.json();
	console.table(data);
	displayProphets(data.prophets);
}
