function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
const {
    expect,
    assert,
} = require("chai");

describe("Testing the function isOddOrEven", () => {
    it("should return undefined with a number parameter", () => {
        expect(isOddOrEven(13)).to.equal(undefined,
            "Function did not return the correct result!");
    });
    it("should return undefined with an object parameter", () => {
        expect(isOddOrEven({ name: "George" })).to.equal(undefined,
            "Function did not return the correct result!");
    });

    it("should return correct result with an even length", () => {
        assert.equal(isOddOrEven("roar"), "even",
            "Function did not return the correct result!");
    });

    it("should return correct result with an odd length", () => {
        expect(isOddOrEven("Peter")).to.equal("odd",
            "Function did not return the correct result!");
    });

    it("should return correct values with multiple consecutive checks", () => {
        expect(isOddOrEven("cat")).to.equal("odd",
            "Function did not return the correct result!");
        expect(isOddOrEven("pet")).to.equal("odd",
            "Function did not return the correct result!");
        expect(isOddOrEven("bird")).to.equal("even",
            "Function did not return the correct result!");
    });
});