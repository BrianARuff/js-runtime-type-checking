/* 
 Checks if value is of type symbol,
 if so then it returns true
 else it will return false;
*/
const isSymbol = (value:any) => {
  return typeof value === 'symbol';
}

module.exports = isSymbol;