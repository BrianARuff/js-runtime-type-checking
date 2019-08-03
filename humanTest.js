const Types = require('./Types.js');
const types = new Types();

console.log(types.isString("hi"));
console.log(types.isNumber(1));
console.log(types.isArray([1,2,3]));
console.log(types.isFunction(function() {}))
const x = () => {};
const xx = function() {};
console.log(types.isFunction(x))
console.log(types.isFunction(xx))
console.log(types.isObject({})); 
console.log(types.isObject(new Object()));
console.log(types.isNull(null));
console.log(types.isUndefined(undefined));
console.log(types.isBoolean(false));
console.log(types.isRegex(new RegExp))
console.log(types.isRegex(/[0-9]/gi));
console.log(types.isError(new Error("error message")));
console.log(types.isError(new TypeError("error message")));
console.log(types.isError(new RangeError("error message")));
console.log(types.isDate(new Date())); 
console.log(types.isDate(Date.now())); // supposed to tbe false :)
console.log(types.isSymbol(Symbol("Hi")));
console.log(types.isSymbol(Symbol())); 
