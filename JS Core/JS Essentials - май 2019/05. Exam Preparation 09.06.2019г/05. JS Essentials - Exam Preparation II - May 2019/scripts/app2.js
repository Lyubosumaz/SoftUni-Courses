function coffeeStorage() {
    let textarea = JSON.parse(document.querySelector("textarea").value);
    let [report, inspection] = document.getElementsByTagName("p");

    let brands = {};
    for (let tokens of textarea) {
        let [command, brand, subBrand, date, quantity] = tokens.split(", ");

        if (command === "IN") {
            if (!brands[brand]) {
                brands[brand] = {};
            }
            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
            if (brands[brand][subBrand].date === date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
            if (brands[brand][subBrand].date < date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
            // console.log(brands[brand])
            // console.log(brands[brand][subBrand])
        } else if (command === "OUT") {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= Number(quantity)) {

                brands[brand][subBrand].quantity -= Number(quantity);
            }
        } else if (command === "REPORT") {
            let output = [];

            for (let [key, value] of Object.entries(brands)) {
                let str = `${key}:`
                for (let [k, v] of Object.entries(value)) {
                    str += ` ${k} - ${v.date} - ${v.quantity}.`
                }
                output.push(str);
            }
            report.innerHTML = output.join("<br>")

        } else if (command === "INSPECTION") {
            let output = [];

            let sortAlphabetically = Object.entries(brands).sort((a, b) => a[0].localeCompare(b[0]));
            for (let [key, value] of sortAlphabetically) {
                let str = `${key}:`
                let sortQuantity = Object.entries(value).sort((a, b) => b[1].quantity - a[1].quantity)
                for (let [k, v] of sortQuantity) {
                    str += ` ${k} - ${v.date} - ${v.quantity}.`
                }
                output.push(str);
            }
            inspection.innerHTML = output.join("<br>")
        }
    }
}