const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input", function () {
    assert.isOk(convertHandler.getNum("1"));
  });
  test("convertHandler should correctly read a decimal number input.", function () {
    assert.isOk(convertHandler.getNum("4.5"));
  });
  test("convertHandler should correctly read a fractional input.", function () {
    assert.isOk(convertHandler.getNum("5/7"));
  });
  test("convertHandler should correctly read a fractional input with a decimal.", function () {
    assert.isOk(convertHandler.getNum("5/7.6"));
  });
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
    assert.isNotOk(convertHandler.getNum("5/7/6"));
  });
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
    assert.equal(convertHandler.getNum(""), 1);
  });
  test("convertHandler should correctly read each valid input unit.", function () {
    assert.isOk(convertHandler.getReturnUnit("L"));
    assert.isOk(convertHandler.getReturnUnit("gal"));
    assert.isOk(convertHandler.getReturnUnit("mi"));
    assert.isOk(convertHandler.getReturnUnit("km"));
    assert.isOk(convertHandler.getReturnUnit("lbs"));
    assert.isOk(convertHandler.getReturnUnit("kg"));
  });
  test("convertHandler should correctly return an error for an invalid input unit.", function () {
    assert.isNotOk(convertHandler.getReturnUnit("kgi"));
  });
  test("convertHandler should return the correct return unit for each valid input unit.", function () {
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
  });
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function () {
    assert.equal(convertHandler.spellOutUnit("L"), "liters");
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
  });
  test("convertHandler should correctly convert gal to L.", function () {
    assert.equal(convertHandler.result("1gal").returnNum, 3.78541);
    assert.equal(convertHandler.result("1gal").returnUnit, "L");
  });
  test("convertHandler should correctly convert L to gal.", function () {
    assert.equal(convertHandler.result("1L").returnNum, 0.26417);
    assert.equal(convertHandler.result("1L").returnUnit, "gal");
  });
  test("convertHandler should correctly convert mi to km.", function () {
    assert.equal(convertHandler.result("1mi").returnNum, 1.60934);
    assert.equal(convertHandler.result("1mi").returnUnit, "km");
  });
  test("convertHandler should correctly convert km to mi.", function () {
    assert.equal(convertHandler.result("1km").returnNum, 0.62137);
    assert.equal(convertHandler.result("1km").returnUnit, "mi");
  });
  test("convertHandler should correctly convert lbs to kg.", function () {
    assert.equal(convertHandler.result("1lbs").returnNum, 0.45359);
    assert.equal(convertHandler.result("1lbs").returnUnit, "kg");
  });
  test("convertHandler should correctly convert kg to lbs.", function () {
    assert.equal(convertHandler.result("1kg").returnNum, 2.20462);
    assert.equal(convertHandler.result("1kg").returnUnit, "lbs");
  });
});
