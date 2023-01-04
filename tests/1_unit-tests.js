const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("#isOk, #isNotOk", function () {
    assert.isOk(convertHandler.getNum("1"));
    assert.isOk(convertHandler.getNum("4.5"));
    assert.isOk(convertHandler.getNum("5/7"));
    assert.isOk(convertHandler.getNum("5/7.6"));
  });
});
