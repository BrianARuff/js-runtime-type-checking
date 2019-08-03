/* 
 Checks if value is of type string,
 if so then it returns true
 else it will return false;
*/
const isString = (value:any) => {
  return typeof value === 'string' || value instanceof String;
}

module.exports = isString;