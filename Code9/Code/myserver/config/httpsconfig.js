const fs = require("fs");
const path = require("path");
var newPath = path.normalize(__dirname+"/..");
var certPath = path.join(newPath,"/myhttpscert/cert.pem");
var keyPath = path.join(newPath,"/myhttpscert/key.pem");
console.log("Cert Path ",certPath);
console.log("Key Path ",keyPath);
const httpConfig={
  'cert':fs.readFileSync(certPath),
  'key':fs.readFileSync(keyPath)
};
module.exports = httpConfig;
