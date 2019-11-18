function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
  
    return string.charAt(index);
}

const { expect } = require("chai");

it("Correct input - string, Incorrect input - index is floating point = Should equals undefined!", () => {
    const expected = lookupChar("100", 2.2);
    const result = undefined;
    expect(expected).to.be.equal(result);
});

it("Incorrect input - string, Correct input - index = Should equals undefined!", () => {
    const expected = lookupChar(100, 2);
    const result = undefined;
    expect(expected).to.be.equal(result);
});

it("Correct input - string, Incorrect input - index = Should equals undefined!", () => {
    const expected = lookupChar("100", "2");
    const result = undefined;
    expect(expected).to.be.equal(result);
});

it("Correct input - string, Bigger input - index = Should equals (Incorrect index)", () => {
    const expected = lookupChar("100", 3);
    const result = "Incorrect index";
    expect(expected).to.be.equal(result);
});

it("Correct input - string, Smaller input - index = Should equals (Incorrect index)", () => {
    const expected = lookupChar("100", -3);
    const result = "Incorrect index";
    expect(expected).to.be.equal(result);
});

it("Correct input - string, Correct input - index = Should equals (1)", () => {
    const expected = lookupChar("100", 0);
    const result = "1";
    expect(expected).to.be.equal(result);
});

it("Correct input - string, Correct input - index = Should equals (4)", () => {
    const expected = lookupChar("1234", 3);
    const result = "4";
    expect(expected).to.be.equal(result);
});
