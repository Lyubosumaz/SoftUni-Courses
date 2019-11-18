function solve() {
    let selectMenuTo = document.getElementById("selectMenuTo");

    let option = document.querySelector("select#selectMenuTo option");
    option.value = "binary";
    option.text = "Binary";
    // selectMenuTo.innerHTML = null;

    // let option1 = document.createElement("option");
    // option1.setAttribute("value", "binary");
    // option1.text = "Binary";
    // selectMenuTo.appendChild(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "hexadecimal");
    option2.text = "Hexadecimal";
    selectMenuTo.appendChild(option2);

    let convertButton = document.querySelector("div#container button");

    convertButton.addEventListener("click", function () {
        let numberInput = document.getElementById("input");
        let outputText = document.getElementById("result");

        let result = '';
        if (selectMenuTo.value === "binary") {
            result = Number(numberInput.value).toString(2);
        }
        if (selectMenuTo.value === "hexadecimal") {
            result = Number(numberInput.value).toString(16).toUpperCase();
            // result = numberInput.value.toString(16);
        }
        outputText['value'] = result;
    });
}