function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

const { expect } = require("chai");


it("Try the input [1, 1, 1, 1], is correct symmetric", () => {
    const expected = true;

    const result = isSymmetric([1, 1, 1, 1]);

    expect(result).to.be.equal(expected);
});

it("Try the input [1, 2, 1], is correct symmetric", () => {
    const expected = true;

    const result = isSymmetric([1, 2, 1]);

    expect(result).to.be.equal(expected);
});

it("Try the input [as, ass, ass, as], is correct symmetric", () => {
    const expected = true;

    const result = isSymmetric(["as", "ass", "ass", "as"]);

    expect(result).to.be.equal(expected);
});

it("Try the input [1, 2, 3, 4], is incorrect symmetric", () => {
    const expected = false;

    const result = isSymmetric([1, 2, 3, 4]);

    expect(result).to.be.equal(expected);
});

it("Try the input [\"a\", \"as\", \"ass\"], is incorrect symmetric", () => {
    const expected = false;

    const result = isSymmetric(["a", "as", "ass"]);

    expect(result).to.be.equal(expected);
});

it("Try the input \"a\", \"as\", 11, is incorrect", () => {
    const expected = false;

    const result = isSymmetric("a", "as", 11);

    expect(result).to.be.equal(expected);
});

it("Try the input {\"a\":  11}, is incorrect", () => {
    const expected = false;

    const result = isSymmetric({"a":  11});

    expect(result).to.be.equal(expected);
});

it("Try the input [1], is correct symmetric", () => {
    const expected = true;

    const result = isSymmetric([1]);

    expect(result).to.be.equal(expected);
});

it("Try the input [5,\"hi\",{a:5},new Date(),{a:5},\"hi\", 5], is correct symmetric", function () {
    const expected = true;

    const result = isSymmetric([5,"hi",{a:5},new Date(),{a:5},"hi", 5]);

    expect(result).to.be.equal(expected);
});