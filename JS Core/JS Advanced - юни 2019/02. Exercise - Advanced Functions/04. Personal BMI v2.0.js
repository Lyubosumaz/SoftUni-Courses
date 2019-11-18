function solve() {
    let [name, age, weight, height] = arguments;
    let obj = {
        "name": name,
        "personalInfo": {},
        "BMI": Math.round(BMI(weight, height)),
        "status": status()
    };

    obj["personalInfo"] = { "age": age, "weight": weight, "height": height };

    function BMI(weight, height) {
        return weight / Math.pow(height / 100, 2);
    }
    
    function status(num  = BMI(weight, height)) {
        if (num < 18.5) {
            return "underweight";
        } else if (num >= 18.5 && num < 25) {
            return "normal";
        } else if (num >= 25 && num < 30) {
            return "overweight";
        } else if (num >= 30) {
            return "obese";
        }
    }
    if (obj["status"] === "obese") {
        Object.assign(obj, { ["recommendation"]: "admission required" });
    }
    // console.log(obj);
    return obj;
}

solve("Peter", 29, 75, 182);
solve("Honey Boo Boo", 9, 57, 137);