const mongoose = require("./connection");
const UserSchema = mongoose.Schema;
var user = new UserSchema({userid:String, pwd:String});
var User = mongoose.model("users",user);
module.exports = User;
