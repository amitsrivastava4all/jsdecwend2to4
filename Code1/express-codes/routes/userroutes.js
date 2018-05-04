const express = require("express");
const route = express.Router();
// Routing
route.get('/login',(req,res)=>{
  console.log("Request ",req.query);
    if(req.query.userid==req.query.pwd){
      //res.render('dashboard',{"user":req.body.userid});
      res.sendFile(__dirname+"/public/dashboard.html");
      //res.send("Welcome "+req.query.userid);
    }
    else{
      res.send("Invalid Userid or Password");
    }

  });
  route.post('/login',(req,res)=>{
   // res.send('Hello Post Login');
   if(req.body.userid==req.body.pwd){
    res.render('dashboard',{"user":req.body.userid});
    //res.sendFile(__dirname+"/public/dashboard.html");
    //res.send("Welcome "+req.query.userid);
  }
  else{
    res.send("Invalid Userid or Password");
  }
  })
  module.exports = route;
