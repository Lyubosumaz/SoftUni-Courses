function getData() {
    let input = JSON.parse(document.querySelector("textarea").value);
    let pplIn = document.querySelector("#peopleIn p");
    let blackL = document.querySelector("#blacklist p");
    let pplOut = document.querySelector("#peopleOut p");

    let lastElement = input.pop();
    let peopleIn = [];
    let blacklist = [];
    let peopleOut = [];

    for (let person of input) {
        let action = person.action;
        let currentName = {
            firstName: person.firstName,
            lastName: person.lastName
        };
        if (action === "peopleIn") {
            if (!blacklist.find(p =>
                p.firstName === currentName.firstName &&
                p.lastName === currentName.lastName)) {
                peopleIn.push(currentName);
            }
        } else if (action === "peopleOut") {
            if (peopleIn.find(p =>
                p.firstName === currentName.firstName &&
                p.lastName === currentName.lastName)) {

                let index = peopleIn.findIndex(p =>
                    p.firstName === currentName.firstName &&
                    p.lastName === currentName.lastName);

                peopleIn.splice(index, 1);
                peopleOut.push(currentName);


            }
        } else if (action === "blacklist") {
            if (peopleIn.find(p =>
                p.firstName === currentName.firstName &&
                p.lastName === currentName.lastName)) {

                let index = peopleIn.findIndex(p =>
                    p.firstName === currentName.firstName &&
                    p.lastName === currentName.lastName);

                peopleIn.splice(index, 1);
                peopleOut.push(currentName);
            }
            blacklist.push(currentName);
        }
    }
    let output = {};
    output["peopleIn"] = peopleIn;
    output["peopleOut"] = peopleOut;
    output["blacklist"] = blacklist;
    if (lastElement.action !== "" && lastElement.criteria !== "") {
        let criteria = lastElement.criteria;
        output[lastElement.action] = output[lastElement.action]
            .sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    pplIn.textContent = output.peopleIn.map(e => JSON.stringify(e)).join(" ");
    pplOut.textContent = output.peopleOut.map(e => JSON.stringify(e)).join(" ");
    blackL.textContent = output.blacklist.map(e => JSON.stringify(e)).join(" ");
}