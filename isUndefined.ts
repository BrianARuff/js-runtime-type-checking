/* 
 Checks if value is of type undefined,
 if so then it returns true
 else it will return false;
*/
const isUndefined = (value:any) => {
  return typeof value === "undefined";
}

module.exports = isUndefined;