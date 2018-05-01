
const serverMode={
  dev:{
    port:3000,
    name:"Development Mode",
    protocol:'http'
  },
  prod:{
    port:5000,
    name:"Production Mode",
    protocol:'https'
  }
}
console.log("Current Mode is ",process.env.NODE_MODE);
var mode = process.env.NODE_MODE?process.env.NODE_MODE:"dev";
console.log("Mode is ",mode);
var modeObject = serverMode[mode]?serverMode[mode]:serverMode.dev;
console.log("Mode Object is ",modeObject);
module.exports = modeObject;
