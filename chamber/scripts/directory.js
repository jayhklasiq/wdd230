const jsonfile = "members.json";

async function getMembers(mainJson) {
	const response = await fetch(mainJson);
	if (response.ok) {
		const data = response.json();
		console.log(data);
	}
}
