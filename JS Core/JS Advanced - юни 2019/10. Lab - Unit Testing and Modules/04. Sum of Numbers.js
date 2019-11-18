function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

const { expect } = require("chai");

it("Expected array [10, 20, 30, 40, 50] to be equal to 150", () => {
    const expected = 150;

    const result = sum([10, 20, 30, 40, 50]);

    expect(result).to.be.equal(expected);
});

it("Expected array [15] to be equal to 15", () => {
    const expected = 15;

    const result = sum([15]);

    expect(result).to.be.equal(expected);
});

it("Expected array [-5, -5, -5] to be equal to -15", () => {
    const expected = -15;

    const result = sum([-5, -5, -5]);

    expect(result).to.be.equal(expected);
});

it("Expected array [] to be equal to 0", () => {
    const expected = 0;

    const result = sum([]);

    expect(result).to.be.equal(expected);
});