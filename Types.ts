const isString = require("./isString.js");
const isNumber = require("./isNumber.js");
const isArray = require("./isArray.js");
const isFunction = require("./isFunction.js");
const isObject = require("./isObject.js");
const isNull = require("./isNull.js");
const isUndefined = require("./isUndefined.js");
const isBoolean = require("./isBoolean.js");
const isRegex = require("./isRegex.js");
const isError = require("./isError.js");
const isDate = require("./isDate.js");
const isSymbol = require("./isSymbol.js");

class Types {
  constructor() { }
  isString(value) { return isString(value) };
  isNumber(value) { return isNumber(value) };
  isArray(value) { return isArray(value) };
  isFunction(value) { return isFunction(value) };
  isObject(value) { return isObject(value) };
  isNull(value) { return isNull(value) };
  isUndefined(value) { return isUndefined(value) };
  isBoolean(value) { return isBoolean(value) };
  isRegex(value) { return isRegex(value) };
  isError(value) { return isError(value) };
  isDate(value) { return isDate(value) };
  isSymbol(value) { return isSymbol(value) };
}

module.exports = Types;