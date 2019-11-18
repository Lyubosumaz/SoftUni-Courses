function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}
console.log(createCalculator())

const { expect } = require("chai");

it("Return a module object", () => {
    let expected ;
    let result = createCalculator();
    expect(result).to.be.equal(expected);
});
