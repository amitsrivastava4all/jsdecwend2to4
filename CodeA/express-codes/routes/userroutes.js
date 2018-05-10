const express = require("express");
const route = express.Router();
const User = require("../models/User");
const logs = require("../utils/logger");
// Routing
route.post("/register",(req,res)=>{
  var userid = req.body.userid;
  var pwd = req.body.pwd;
  const userObject= new User(userid,pwd);
  const userOperations = require("../db/usercrud");
  userOperations.register(userObject,res);
});
route.get('/login',(req,res)=>{
  //console.log("Request ",req.query);
  logs.log('debug','Request Comes in Login ',req.query);
    if(req.query.userid==req.query.pwd){
      //res.render('dashboard',{"user":req.body.userid});
      res.sendFile(__dirname+"/public/dashboard.html");
      //res.send("Welcome "+req.query.userid);
    }
    else{
      res.send("Invalid Userid or Password");
    }

  });
  route.get('/profile',(req,res)=>{
    logs.log('debug','Request Comes in Profile ',req.session);
    console.log("Request is ",req.session);
    if(req.session && req.session.uid){
      res.send("Inside Profile Page "+req.session.uid);
    }
    else{
      const path = require("path");
      const newPath = path.normalize(__dirname+"/..");
      const fullPath = path.join(newPath,"public/login.html");
      console.log("Full Path is ",fullPath);
      res.sendFile(fullPath);
      //res.sendFile(__dirname+"/../public/login.html");
    }

  })
  route.get('/search',(req,res)=>{
    var userid = req.query.userid;
    console.log("Userid is ",userid);
    const userOperations = require("../db/usercrud");
    userOperations.search(userid,res);
  })
  route.post('/login',(req,res)=>{
    var userid = req.body.userid;
  var pwd = req.body.pwd;
  const userObject= new User(userid,pwd);
  const userOperations = require("../db/usercrud");
  userOperations.login(userObject,res,req);
   // res.send('Hello Post Login');
   //if(req.body.userid==req.body.pwd){
    //res.render('dashboard',{"user":req.body.userid});
    //res.sendFile(__dirname+"/public/dashboard.html");
    //res.send("Welcome "+req.query.userid);
  //}
  // else{
  //   res.send("Invalid Userid or Password");
  // }
  })
  module.exports = route;
