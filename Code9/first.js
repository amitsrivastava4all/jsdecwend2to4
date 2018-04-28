function add(x,y){
  return x +y;
}
function subtract(x,y){
  console.log("this is subtract");
  return x - y;
}
console.log("Add...");
// var sum = add(10,20);
// console.log(`Sum is ${sum}`);
module.exports = {
  add,subtract
}
// module.exports = add;
// module.exports.subtract = subtract;
