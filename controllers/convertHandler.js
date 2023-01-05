function ConvertHandler() {
  this.getNum = function (input) {
    try {
      let result = input.match(/[^a-z]+/i);
      if (result == null) return 1;
      return /\/\//.test(result) == true ? "invalid number" : eval(result[0]);
    } catch {
      return "invalid number";
    }
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-z]+/i);
    return result[0];
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "L";
        break;
      case "lbs":
        result = "kg";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum * (1 / galToL);
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum * (1 / lbsToKg);
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * (1 / miToKm);
        break;
      default:
        result = "invalid unit";
        break;
    }
    return Math.round((result + Number.EPSILON) * 100000) / 100000;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let string =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);
    return string;
  };

  this.result = function (input) {
    let initNum = this.getNum(input);
    let initUnit = this.getUnit(input);
    initUnit == "l" || initUnit == "L"
      ? (initUnit = "L")
      : (initUnit = initUnit.toLowerCase());
    let returnUnit = this.getReturnUnit(initUnit);
    if (initNum == "invalid number" && returnUnit == "invalid unit")
      return "invalid number and unit";
    else if (initNum == "invalid number") return "invalid number";
    else if (returnUnit == "invalid unit") return "invalid unit";
    let returnNum = this.convert(initNum, initUnit);
    let string = this.getString(initNum, initUnit, returnNum, returnUnit);
    let result = { initNum, initUnit, returnNum, returnUnit, string };
    return result;
  };
}

module.exports = ConvertHandler;
