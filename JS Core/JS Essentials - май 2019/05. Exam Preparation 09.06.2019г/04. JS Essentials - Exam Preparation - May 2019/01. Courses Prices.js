function solve(fundamentals, advanced, applications, formInString) {
    result = 0;

    const JSFundamentals = 170;  //BGN
    let JSAdvanced = 180;        //BGN
    const JSApplications = 190;  //BGN

    if (advanced === true && fundamentals === true) {
        JSAdvanced = JSAdvanced - (JSAdvanced * 0.10);
    }
    if (fundamentals === true) {
        result += JSFundamentals;
    }
    if (advanced === true) {
        result += JSAdvanced;
    }
    if (applications === true) {
        result += JSApplications;
    }
    if (advanced === true && fundamentals === true && applications === true) {
        result = 0;
        result = (JSFundamentals + JSAdvanced + JSApplications) - ((JSFundamentals + JSAdvanced + JSApplications) * 0.06);
    }
    if (formInString === "online") {
        result = result - (result * 0.06);
    }
    console.log(Math.round(result));
}
solve(true, false, false, "onsite")
solve(true, false, false, "online")

solve(true, true, false, "onsite")
solve(true, true, false, "online")

solve(true, true, true, "onsite")
solve(true, true, true, "online")

solve(false, false, false, "onsite")
solve(false, false, false, "online")
