const express = require("express");
const bodyParser = require("body-parser");
console.log("type express ",typeof express);
const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/",require("./routes/userroutes"));
// parse application/json
app.use(bodyParser.json())
// // Routing
// app.get('/login',(req,res)=>{
// console.log("Request ",req.query);
//   if(req.query.userid==req.query.pwd){
//     //res.render('dashboard',{"user":req.body.userid});
//     res.sendFile(__dirname+"/public/dashboard.html");
//     //res.send("Welcome "+req.query.userid);
//   }
//   else{
//     res.send("Invalid Userid or Password");
//   }

// });
// app.post('/login',(req,res)=>{
//  // res.send('Hello Post Login');
//  if(req.body.userid==req.body.pwd){
//   res.render('dashboard',{"user":req.body.userid});
//   //res.sendFile(__dirname+"/public/dashboard.html");
//   //res.send("Welcome "+req.query.userid);
// }
// else{
//   res.send("Invalid Userid or Password");
// }
// })
console.log("type app ",typeof app);
var server = app.listen(process.env.port|1234,()=>{
  console.log("Server Start ",server.address().port);
});
