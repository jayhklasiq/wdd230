const mainJson = "data/members.json";

async function getMembers() {
	const response = await fetch(mainJson);
	if (response.ok) {
		const data = response.json();
		console.log(data);
	}
}
