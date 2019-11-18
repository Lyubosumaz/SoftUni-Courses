function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const { expect } = require("chai");

it("Try the input 255, 255, 255 is correct #FFFFFF", () => {
    //Arrange
    const expected = "#FFFFFF";
    //Act
    const result = rgbToHexColor(255, 255, 255);
    //Assert
    expect(result).to.be.equal(expected);
});

it("Try the input 0, 0, 0 is correct #000000", () => {
    //Arrange
    const expected = "#000000";
    //Act
    const result = rgbToHexColor(0, 0, 0);
    //Assert
    expect(result).to.be.equal(expected);
});

it("Try the input 128, 128 is correct undefined", () => {
    //Arrange
    const expected = undefined;
    //Act
    const result = rgbToHexColor(128, 128);
    //Assert
    expect(result).to.be.equal(expected);
});

it("Try the input 128, 128, 256 is correct undefined", () => {
    //Arrange
    const expected = undefined;
    //Act
    const result = rgbToHexColor(128, 128, 256);
    //Assert
    expect(result).to.be.equal(expected);
});

it("Try the input 128, 128, -128 is correct undefined", () => {
    //Arrange
    const expected = undefined;
    //Act
    const result = rgbToHexColor(128, 128, -128);
    //Assert
    expect(result).to.be.equal(expected);
});