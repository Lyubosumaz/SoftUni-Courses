class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20;      // Default value    
    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('Name must be a non-empty string');
    }
    if (newValue.length === 0) {
      throw new Error('Name must be a non-empty string');
    }
    this._name = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('Value must be a non-negative number');
    }
    this._value = newValue;
  }

  get VAT() {
    return this._VAT;
  }

  set VAT(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('VAT must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('VAT must be a non-negative number');
    }
    this._VAT = newValue;
  }

  get active() {
    return this._active;
  }

  set active(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new Error('Active status must be a boolean');
    }
    this._active = newValue;
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
    ];
    return output.join('\n');
  }
}

//   // Should throw an error
// try {
//   const hrPack = new PaymentPackage('HR Services');
// } catch(err) {
//   console.log('Error: ' + err.message);
// }
// const packages = [
//   new PaymentPackage('HR Services', 1500),
//   new PaymentPackage('Consultation', 800),
//   new PaymentPackage('Partnership Fee', 7000),
// ];
// console.log(packages.join('\n'));

// const wrongPack = new PaymentPackage('Transfer Fee', 100);
// // Should throw an error
// try {
//   wrongPack.active = null;
// } catch(err) {
//   console.log('Error: ' + err.message);
// }

const { expect } = require("chai");

describe("PaymentPackage", function () {
  describe("name", () => {
    it("set name being correct value", function () {
      const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      const test = new PaymentPackage("HR Services", 1500);
      expect(test.toString()).to.be.equal(expected)
    });

    it("set name being empty string", function () {
      const expected = "Name must be a non-empty string"
      const test = () => new PaymentPackage("", 1500);
      expect(test).to.throw(Error, expected)
    });

    it("set name being different than string", function () {
      const expected = "Name must be a non-empty string"
      const test = () => new PaymentPackage(1.1, 1500);
      expect(test).to.throw(Error, expected)
    });
  });
  describe("value", () => {
    it("set value being correct value", function () {
      const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      const test = new PaymentPackage("HR Services", 1500);
      expect(test.toString()).to.be.equal(expected)
    });

    it("set value being negative number", function () {
      const expected = "Value must be a non-negative number"
      const test = () => new PaymentPackage("HR Services", -1500);
      expect(test).to.throw(Error, expected)
    });

    it("set value being different than number", function () {
      const expected = "Value must be a non-negative number"
      const test = () => new PaymentPackage("HR Services", "1500");
      expect(test).to.throw(Error, expected)
    });
  });
  describe("VAT", () => {
    it("set VAT being correct value", function () {
      const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      const test = new PaymentPackage("HR Services", 1500);
      expect(test.toString()).to.be.equal(expected)
    });

    it("set VAT being negative number", function () {
      const expected = "Value must be a non-negative number"
      const test = () => new PaymentPackage("HR Services", -1500);
      expect(test).to.throw(Error, expected)
    });

    it("set VAT being different than number", function () {
      const expected = "Value must be a non-negative number"
      const test = () => new PaymentPackage("HR Services", "1500");
      expect(test).to.throw(Error, expected)
    });
  });
  describe("active", () => {
    it("set active being correct value", function () {
      const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      const test = new PaymentPackage("HR Services", 1500);
      expect(test.toString()).to.be.equal(expected)
    });

    it("set active being different than boolean", function () {
      const expected = "Active status must be a boolean";
      const test = new PaymentPackage("HR Services", 1500);
      expect(() => test.active = null).to.throw(Error, expected)
    });
  });
  describe("toString", () => {
    it("set toString being correct value", function () {
      const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      const test = new PaymentPackage("HR Services", 1500);
      expect(test.toString()).to.be.equal(expected)
    });
  });
});