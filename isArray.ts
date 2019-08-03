/* 
 Checks if value is of type "array",
 if so then it returns true
 else it will return false;
*/
const isArray = (value:any) => {
  return value && typeof value === 'object' && value.constructor === Array;

}

module.exports = isArray;