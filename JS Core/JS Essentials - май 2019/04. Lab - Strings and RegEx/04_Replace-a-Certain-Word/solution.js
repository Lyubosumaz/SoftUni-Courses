function solve() {
    const theWord = document.getElementById("word").value;
    let arrayOfStrings = document.getElementById("text").value;
    let parts = JSON.parse(arrayOfStrings);

    let wordToReplace = parts[0].split(" ")[2];
    let pattern = new RegExp(wordToReplace, "gi");
    // parts = parts.map(part => part.replace(pattern, theWord));

    let result = document.getElementById("result");
    for (let sentence of parts) {
        sentence = sentence.replace(pattern, theWord);
        let p = document.createElement("p");
        p.innerHTML = sentence;
        result.appendChild(p);
    }
}