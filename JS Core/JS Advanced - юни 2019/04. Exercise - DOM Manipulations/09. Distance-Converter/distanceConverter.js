function attachEventsListeners() {
    // let test = "";
    // input.addEventListener("input", function (event) {
    //     test = event.target.value;
    // });

    let btn = document.getElementById("convert");
    btn.addEventListener("click", () => {
        let input = Number(document.getElementById("inputDistance").value);
        let copyValue = input;
        //From:
        let inputUnits = document.getElementById("inputUnits");
        let units = inputUnits.options[inputUnits.selectedIndex].text;
        switch (units) {
            case "Kilometers":
                input = input * 1000;
                break;
            case "Centimeters":
                input = input * 0.01;
                break;
            case "Millimeters":
                input = input * 0.001;
                break;
            case "Miles":
                input = input * 1609.344;
                break;
            case "Yards":
                input = input * 0.9144;
                break;
            case "Feet":
                input = input * 0.3048;
                break;
            case "Inches":
                input = input * 0.0254;
                break;
        }
        //Convert
        let outputUnits = document.getElementById("outputUnits");
        let wanted = outputUnits.options[outputUnits.selectedIndex].text;
        switch (wanted) {
            case "Kilometers":
                input = input * 0.001;
                break;
            case "Centimeters":
                input = input * 100;
                break;
            case "Millimeters":
                input = input * 1000;
                break;
            case "Miles":
                input = input * 0.000621;
                break;
            case "Yards":
                input = input * 1.093613;
                break;
            case "Feet":
                input = input * 3.28084;
                break;
            case "Inches":
                input = input * 39.370079;
                break;
        }
        let output = document.getElementById("outputDistance");
        output.disabled = false;
        if (units === wanted) {
            output.value = copyValue;
        } else {
            output.value = input;
        }
    });
}