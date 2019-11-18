let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const { expect } = require("chai");

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("with positive number (5), should return (10)", () => {
            let expected = mathEnforcer.addFive(5)
            let result = 10;
            expect(expected).to.be.equal(result);
        });
        it("with negative number (-4), should return (1)", () => {
            let expected = mathEnforcer.addFive(-4)
            let result = 1;
            expect(expected).to.be.equal(result);
        });
        it("with floating point number (1.1), should return (6.1)", () => {
            let expected = mathEnforcer.addFive(1.1)
            let result = 6.1;
            expect(expected).to.be.closeTo(result, 0.01);
        });
        it("with string parameter (\"10\"), should return undefined", () => {
            let expected = mathEnforcer.addFive("10")
            let result = undefined;
            expect(expected).to.be.equal(result);
        });
    });
    describe("subtractTen", function () {
        it("with positive number (11), should return (1)", () => {
            let expected = mathEnforcer.subtractTen(11)
            let result = 1;
            expect(expected).to.be.equal(result);
        });
        it("with negative number (-20), should return (-30)", () => {
            let expected = mathEnforcer.subtractTen(-20)
            let result = -30;
            expect(expected).to.be.equal(result);
        });
        it("with floating point number (15,5), should return (5.5)", () => {
            let expected = mathEnforcer.subtractTen(15.5)
            let result = 5.5;
            expect(expected).to.be.closeTo(result, 0.01);
        });
        it("with string parameter (\"60\"), should return undefined", () => {
            let expected = mathEnforcer.subtractTen("60")
            let result = undefined;
            expect(expected).to.be.equal(result);
        });
    });
    describe("sum", function () {
        it("input two positive numbers (5)(6), should return correct (11)", () => {
            let expected = mathEnforcer.sum(5, 6);
            let result = 11;
            expect(expected).to.be.equal(result);
        });
        it("input two negative numbers (-5)(-6), should return correct (-11)", () => {
            let expected = mathEnforcer.sum(-5, -6);
            let result = -11;
            expect(expected).to.be.equal(result);
        });
        it("input one positive number (5) and one negative number (-6), should return correct (-1)", () => {
            let expected = mathEnforcer.sum(5, -6);
            let result = -1;
            expect(expected).to.be.equal(result);
        });
        it("input two floating point numbers (5.2)(6.7), should return correct (11.9)", () => {
            let expected = mathEnforcer.sum(5.2, 6.7);
            let result = 11.9;
            expect(expected).to.be.closeTo(result, 0.01);
        });
        it("input one positive number (5) and one string input (\"6\"), should return correct undefined", () => {
            let expected = mathEnforcer.sum(5, "6");
            let result = undefined;
            expect(expected).to.be.equal(result);
        });
        it("input one string input (\"5\") and one positive number (6), should return correct undefined", () => {
            let expected = mathEnforcer.sum("5", 6);
            let result = undefined;
            expect(expected).to.be.equal(result);
        });
    });
});