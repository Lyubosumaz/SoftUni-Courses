function getData() {
	let inputJSON = JSON.parse(document.getElementsByTagName("textarea")[0].value);

	let peopleInPara = document.getElementsByTagName("p")[0];
	let peopleInObj = {};

	let blacklistPara = document.getElementsByTagName("p")[1];
	let blacklistOnj = {};

	let peopleOutPara = document.getElementsByTagName("p")[2];
	let peopleOutObj = {};

	let criteria = inputJSON[inputJSON.length - 1].criteria;
	let action = inputJSON[inputJSON.length - 1].action;
	console.log(criteria, action)

	for (let i = 0; i < inputJSON.length - 1; i++) {
		const currentPerson = { firstName: inputJSON[i].firstName, lastName: inputJSON[i].lastName };
		if (inputJSON[i].action === "peopleIn" && !blacklistOnj[inputJSON[i].firstName]) {
			peopleInObj[inputJSON[i].firstName] = currentPerson;
		}
		if (inputJSON[i].action === "blacklist") {
			blacklistOnj[inputJSON[i].firstName] = currentPerson;
			delete peopleInObj[inputJSON[i].firstName];
		}
		if (inputJSON[i].action === "peopleOut" && peopleInObj[inputJSON[i].firstName]) {
			peopleOutObj[inputJSON[i].firstName] = currentPerson;
			delete peopleInObj[inputJSON[i].firstName];
		}
	}
	if (criteria.length > 0 && action.length > 0) {
		switch (action) {
			case "peopleIn":
				peopleInObj = Object.values(peopleInObj).sort(sorting);
				blacklistOnj = Object.values(blacklistOnj);
				peopleOutObj = Object.values(peopleOutObj);
				break;
			case "blacklist":
				peopleInObj = Object.values(peopleInObj);
				blacklistOnj = Object.values(blacklistOnj).sort(sorting);
				peopleOutObj = Object.values(peopleOutObj);
				break;
			case "peopleOut":
				peopleInObj = Object.values(peopleInObj);
				blacklistOnj = Object.values(blacklistOnj);
				peopleOutObj = Object.values(peopleOutObj).sort(sorting);
				break;
		}
	} else {
		peopleInObj = Object.values(peopleInObj);
		blacklistOnj = Object.values(blacklistOnj);
		peopleOutObj = Object.values(peopleOutObj);
	}
	peopleInPara.textContent = peopleInObj.map(p => JSON.stringify(p)).join(" ");
	blacklistPara.textContent = blacklistOnj.map(p => JSON.stringify(p)).join(" ");
	peopleOutPara.textContent = peopleOutObj.map(p => JSON.stringify(p)).join(" ");

	function sorting(a, b) {
		const genreA = a[criteria].toUpperCase();
		const genreB = b[criteria].toUpperCase();

		let comparison = 0;
		if (genreA > genreB) {
			comparison = 1;
		} else if (genreA < genreB) {
			comparison = -1;
		}
		return comparison;
	}
}