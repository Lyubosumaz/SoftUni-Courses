function solve() {
    let text = document.getElementById("text").value;
    const groupSize = parseInt(document.getElementById("number").value);

    if (text.length % groupSize > 0) {
        const remainder = text.length % groupSize;
        const charsToFill = groupSize - remainder;
        text = text + text.substr(0, charsToFill);
    }
    let output = [];
    for (let i = 0; i < text.length; i += groupSize) {
        output.push(text.substr(i, groupSize));
    }
    document.getElementById("result").innerHTML = output.join(" ");
}