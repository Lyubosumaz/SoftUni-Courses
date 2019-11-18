function solve() {
    let keyWordInput = document.getElementById("string");
    let textInput = document.getElementById("text");

    let keyword = keyWordInput.value;
    let text = textInput.value;

    let messageRegexString = `${keyword}(.*)${keyword}`;
    // let messageRegex = new RegExp(messageRegexString,"g");
    // let messageMatch = messageRegex.exec(text);
    // let message =messageMatch[1];
    let message = text.match(messageRegexString)[1];
    console.log(message)
    let locationRegex = /(north|east).*?(\d{2})[^\,]*?(\,)[^\,]*?(\d{6})/gmi;

    let eastMatch;
    let northMatch;

    let match = locationRegex.exec(text);
    console.log(match)

    while (match !== null) {
        if (match[1].toLocaleUpperCase() === "NORTH") {
            northMatch = match;
        } else {
            eastMatch = match;
        }
        match = locationRegex.exec(text);
    }
    let result = document.getElementById("result");

    let p1 = document.createElement("p");
    p1.innerHTML = `${northMatch[2]}.${northMatch[4]} N`;

    let p2 = document.createElement("p");
    p2.innerHTML = `${eastMatch[2]}.${eastMatch[4]} E`;

    let p3 = document.createElement("p");
    p3.innerHTML = `Message: ${message}`;

    result.appendChild(p1)
    result.appendChild(p2)
    result.appendChild(p3)
}