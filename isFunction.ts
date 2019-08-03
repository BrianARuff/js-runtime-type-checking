/* 
 Checks if value is of type function,
 if so then it returns true
 else it will return false;
*/
const isFunction = (func:any) => {
  return typeof func === "function";
}

module.exports = isFunction;