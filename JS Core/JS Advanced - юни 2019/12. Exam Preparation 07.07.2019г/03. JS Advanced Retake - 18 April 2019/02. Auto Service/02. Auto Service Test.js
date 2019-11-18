const { AutoService } = require("./02. Auto Service_Ресурси");
const { expect } = require("chai");

describe("testing the class", () => {

    it("creating new class with 20 capacity and use getter availableSpace", () => {
        let test = new AutoService(20)
        expect(test.availableSpace).to.be.equal(20);
    });

    it("correct adding and carInfo of car", () => {
        let test = new AutoService(20)
        test.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        let result = {
            plateNumber: 'CA1234CA',
            clientName: 'Peter',
            carInfo:
                { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' }
        };
        expect(test.carInfo('CA1234CA', 'Peter')).to.be.eql(result);
    });

    it("incorrect carInfo of car", () => {
        let test = new AutoService(20)
        test.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        let result = "There is no car with platenumber CA1234CA and owner PETER.";
        expect(test.carInfo('CA1234CA', 'PETER')).to.be.eql(result);
    });

    it("testing this.backlogWork", () => {
        let test = new AutoService(0)
        test.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        let result = {
            plateNumber: 'CA1234CA',
            clientName: 'Peter',
            carInfo:
                { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' }
        };
        expect(test.carInfo('CA1234CA', 'Peter')).to.be.eql(result);
    });

    it("repaired done", () => {
        let test = new AutoService(20)
        test.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        let result = "Your doors were repaired.";
        expect(test.repairCar()).to.be.equal(result);
    });

    it("fine car", () => {
        let test = new AutoService(20)
        test.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ' });
        let result = "Your car was fine, nothing was repaired.";
        expect(test.repairCar()).to.be.equal(result);
    });

    it("there are no cars", () => {
        let test = new AutoService(20)
        let result = "No clients, we are just chilling...";
        expect(test.repairCar()).to.be.equal(result);
    });
});