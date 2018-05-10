const express = require("express");
const app= express();
app.set("view engine","ejs");
const passportGoogleSt = require("./passportgoogle");  // Setup
const passport = require("passport");
app.use(passport.initialize());
app.get('/',(req,res)=>{
res.render('index');
});
app.get('/login',(req,res)=>{

});
app.get('/google',passport.authenticate('google',{
    scope : ['profile']
}));
app.get('/google/callback',passport.authenticate('google',
{session: false}),(req,res)=>{
    res.render('welcome');
});


const server = app.listen("9999",()=>{
    console.log("Server Start at  ",server.address().port);
})