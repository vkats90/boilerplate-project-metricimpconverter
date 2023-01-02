function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/\d+/);
    return result[0];
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-z]+/i);
    return result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
        result = 'litres'
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit){
      case 'gal':
        result = initNum*galToL;
        break;
      case 'L':
        result = initNum*(1/galToL);
        break;
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      case 'kg':
        result = initNum*(1/lbsToKg);
        break;
      case 'mi':
        result = initNum*miToKm;
        break;
      case 'km':
        result = initNum*(1/miToKm)
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
