const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(config.url);
console.log('Connection done...');
module.exports= mongoose;
