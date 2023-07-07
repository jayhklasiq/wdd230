
async function displayMembersView(view) {
	let members = []; // Load members data from the JSON source
	try {
		// Fetch JSON data
		const response = await fetch('data/members.json');
		const data = await response.json();
		console.log(data);
		members = data.members;
		renderMembersView(view);
	} catch (error) {
		console.error('Error fetching member data:', error);
	}
}
