const { expect } = require("chai");
const { Warehouse } = require("./09. Warehouse.js");


describe("correct", () => {
    it("new class 500 start", function () {
        let test = new Warehouse(500);
        expect(test.capacity).to.be.equal(500)
    });

    it("this this", function () {
        let test = new Warehouse(10);
        test.addProduct("Food", "apple", 5);
        test.addProduct("Food", "pear", 3);
        test.addProduct("Drink", "soda", 1);
        expect(test.orderProducts("Food")).to.be.eql({ apple: 5, pear: 3 })
    });

    it("revision adding two time 5", () => {
        let test = new Warehouse(10);
        test.addProduct("Food", "apple", 5);
        test.addProduct("Drink", "juice", 5);
        expect(test.occupiedCapacity()).to.be.equal(10);
    });

    it("scrapeAProduct correct return", () => {
        let test = new Warehouse(10);
        test.addProduct("Food", "apple", 5);
        expect(test.scrapeAProduct("apple", 5)).to.be.eql({ apple: 0 });
    });

});
describe("throw errors", () => {

    it("no space > floating point", function () {
        let test = new Warehouse(5.5);
        let result = `There is not enough space or the warehouse is already full`;
        expect(() => test.addProduct("beer", "SS", 5.6)).to.throw(result)
    });
    it("invalid space warehouse", function () {
        let result = `Invalid given warehouse space`;
        expect(() => new Warehouse("11").addProduct("aaa", "bbb", 11)).to.throw(result);
    });

    it("throw product do not exist", () => {
        let test = new Warehouse(10);
        test.addProduct("Food", "apple", 5);
        let result = "bananas do not exists";
        expect(() => test.scrapeAProduct("bananas", 100)).to.throw(result);
    });

    // it("", () => {
    //     let test = new Warehouse(10);
    //     test.addProduct("Food", "apple", 5);
    //     let result = `Product type - [Food]
    //     - apple 5
    //     Product type - [Drink]`;
    //     expect(test.revision()).to.be.equal(result);
    // });

    it("o correct return", () => {
        let test = new Warehouse(10);
        test.addProduct("Food", "apple", 5);
        expect(test.orderProducts("Food")).to.be.eql({ apple: 5 });
    });

});