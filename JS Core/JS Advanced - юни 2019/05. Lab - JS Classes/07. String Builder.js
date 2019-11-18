class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') {
            throw new TypeError('Argument must be string');
        }
    }

    toString() {
        return this._stringArray.join('');
    }
}

const { expect } = require("Chai");

describe("my class StringBuilder", () => {
    describe("constructor", () => {
        it("is an sting input", () => {
            let expected = "aabbcc";
            let test = new StringBuilder("aabbcc");
            expect(test.toString()).to.be.equal(expected);
        });

        it("different than sting input", () => {
            let expected = "Argument must be string";
            let test = () => new StringBuilder(123);
            expect(test).to.throw(TypeError, expected);
        });

        it("undefined input", () => {
            let expected = "";
            let test = new StringBuilder(undefined);
            expect(test.toString()).to.be.equal(expected);
        });
    });

    describe("append", () => {
        it("correct append", () => {
            let expected = "aabbccdd";
            let test = new StringBuilder("aabbcc");
            test.append("dd");
            expect(test.toString()).to.be.equal(expected);
        });

        it("empty input append", () => {
            let expected = "aabbcc";
            let test = new StringBuilder("aabbcc");
            test.append("");
            expect(test.toString()).to.be.equal(expected);
        });

        it("different than sting in append", () => {
            let expected = "Argument must be string";
            let test = new StringBuilder("aabbcc");
            expect(() => test.append(123)).to.throw(TypeError, expected);
        });
    });

    describe("prepend", () => {
        it("correct prepend", () => {
            let expected = "ddaabbcc";
            let test = new StringBuilder("aabbcc");
            test.prepend("dd");
            expect(test.toString()).to.be.equal(expected);
        });

        it("different than sting in prepend", () => {
            let expected = "Argument must be string";
            let test = new StringBuilder("aabbcc");
            expect(() => test.prepend(123)).to.throw(TypeError, expected);
        });
    });

    describe("insertAt", () => {
        it("correct insertAt", () => {
            let expected = "aaddbbcc";
            let test = new StringBuilder("aabbcc");
            test.insertAt("dd", 2);
            expect(test.toString()).to.be.equal(expected);
        });

        it("correct insertAt", () => {
            let expected = "aabbddcc";
            let test = new StringBuilder("aabbcc");
            test.insertAt("dd", -2);
            expect(test.toString()).to.be.equal(expected);
        });

        it("different than sting in insertAt", () => {
            let expected = "Argument must be string";
            let test = new StringBuilder("aabbcc");
            expect(() => test.insertAt(123, 2)).to.throw(TypeError, expected);
        });
    });

    describe("remove", () => {
        it("correct remove", () => {
            let expected = "aacc";
            let test = new StringBuilder("aabbcc");
            test.remove(2, 2);
            expect(test.toString()).to.be.equal(expected);
        });

        it("bigger index in remove", () => {
            let expected = "aabbcc";
            let test = new StringBuilder("aabbcc");
            test.remove(7, 2);
            expect(test.toString()).to.be.equal(expected);
        });

        it("smaller index in remove", () => {
            let expected = "aabb";     //backwards
            let test = new StringBuilder("aabbcc");
            test.remove(-2, 2);
            expect(test.toString()).to.be.equal(expected);
        });

        it("bigger remover in remove", () => {
            let expected = "";
            let test = new StringBuilder("aabbcc");
            test.remove(0, 8);
            expect(test.toString()).to.be.equal(expected);
        });
    });

    describe("toString", () => {
        it("undefined input", () => {
            let expected = "";
            let test = new StringBuilder(undefined);
            expect(test.toString()).to.be.equal(expected);
        });

        it("is an sting input", () => {
            let expected = "aabbcc";
            let test = new StringBuilder("aabbcc");
            expect(test.toString()).to.be.equal(expected);
        });
    });
});