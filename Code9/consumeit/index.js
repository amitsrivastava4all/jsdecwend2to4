const bm = require("brainmentorsapp");
const chalk = require("chalk");
const sendMail = require("./utils/mail");
console.log(chalk.red("Add is "),bm.add(100,20));
console.log(chalk.blue("Add is "),bm.multiply(100,20));
console.log(chalk.green("Add is "),bm.power(100,10));
sendMail('amit.shashi.srivastava@gmail.com','Testing Node Mailer','Hi User How r u ');
