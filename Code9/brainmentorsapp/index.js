function add(x,y){
return x + y;
}

function multiply(x,y){
  return x  * y;
}
var power = require("./moreoperations");
var math = {add, multiply,power};
module.exports = math;
