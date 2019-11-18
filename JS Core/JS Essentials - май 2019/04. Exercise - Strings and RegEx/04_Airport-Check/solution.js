function solve() {
    let inputString = document.getElementById("string").value;
    let cutInput = inputString.split(/\s*\,\s*/g)

    let informationText = cutInput[0];
    let informationToPrint = cutInput[1];

    console.log(informationText);
    console.log(informationToPrint);

    let passengerName = /\s([A-Z][A-Za-z]*\-[A-Z][A-Za-z]*|[A-Z][A-Za-z]*\-[A-Z][A-Za-z]*\.\-[A-Z][A-Za-z]*)\s/;
    // let passengerName =  /\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*(\s|\.-[A-Z][A-Za-z]*\s)/;
    let matcherPassengerName = informationText.match(passengerName)[0];
    name = matcherPassengerName.replace(new RegExp(/\-/, "g"), " ").trim();
    // name = matcherPassengerName.replace(new RegExp(/\-/, "g"), " ").trim();
    console.log(name)

    let airport = /\s([A-Z]{3}\/[A-Z]{3})\s/;
    let matcherAirport = informationText.match(airport)[0];
    matcherAirport = matcherAirport.trim().split("/");
    let fromAirport = matcherAirport[0];
    let toAirport = matcherAirport[1];
    console.log(fromAirport)
    console.log(toAirport)

    let flightNumber = /\s([A-Z]{1,3}[0-9]{1,5})\s/;
    let matcherFlightNumber = informationText.match(flightNumber)[0];
    number = matcherFlightNumber.trim();
    console.log(number)

    let company = /\-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/;
    let matcherCompany = informationText.match(company)[0];
    airCompany = matcherCompany.replace(new RegExp(/\-/, "g"), " ").trim().split("*").join(" ");
    // airCompany = matcherCompany.replace(/\-\s/, "").replace(/\*/g, " ").trim();
    console.log(airCompany)

    let result = document.getElementById("result")
    let output = "";
    switch (informationToPrint) {
        case "name":
            output = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case "flight":
            output = `Your flight number ${number} is from ${fromAirport} to ${toAirport}.`;
            break;
        case "company":
            output = `Have a nice flight with ${airCompany}.`;
            break;
        case "all":
            output = `Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${airCompany}.`;
            break;
    }
    result.textContent = output;

    // let namePattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/;
    // let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
    // let numberPattern = / [A-Z]{1,3}[\d]{1,5} /;
    // let companyPattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /;

    // let name = informationText.match(namePattern)[0].trim().replace(/-/g, " ");
    // let [fromAirport, toAirport] = informationText.match(airportPattern)[0].trim().split("/");
    // let number = informationText.match(numberPattern)[0].trim();
    // let company = informationText.match(companyPattern)[0].replace("- ", "").replace(/\*/g, " ").trim();

    // if (informationToPrint === "name") {
    //     output = (`Mr/Ms, ${name}, have a nice flight!`);
    // } else if (informationToPrint === "flight") {
    //     output = (`Your flight number ${number} is from ${fromAirport} to ${toAirport}.`);
    // } else if (informationToPrint === "company") {
    //     output = (`Have a nice flight with ${company}.`);
    // } else if (informationToPrint === "all") {
    //     output = (`Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
    // }
    // result.textContent = output;
}