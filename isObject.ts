/* 
 Checks if value is of type object,
 if so then it returns true
 else it will return false;
*/
const isObject = (value:any) => {
  return value && typeof value === 'object' && value.constructor === Object;

}

module.exports = isObject;