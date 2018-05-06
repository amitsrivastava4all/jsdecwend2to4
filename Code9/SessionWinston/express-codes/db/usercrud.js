const UserSchema = require("./userschema");
var userOperations = {
  search(userid,res){
    UserSchema.findOne({"userid":userid},(err,record)=>{
      if(err){
        res.send("Error in DB "+err);
      }
      else{
      if(record){
         res.json({"message":"this is user is already exist , kindly use something else..."});
      }
      else{
        res.json({"message":"U can use this userid"});
      }
    }
    })
  },
  register(userObject,res){
    UserSchema.create(userObject,(error)=>{
      if(error){
        res.send("Error in DB , Can't Register "+error);
      }
      else{
        res.send("You Register SuccessFully....");
      }
    });
  },
  login(userObject,res,req){
    UserSchema.findOne({"userid":userObject.userid,"pwd":userObject.pwd},(error,record)=>{
      if(error){
        res.send("Error in DB Can't Login...."+error)
      }
      else{
        if(record){
          console.log("Session is ",req.session);
        if(req.session){
          req.session.uid = record.userid;
          console.log("Session is ",req.session);
          res.render('dashboard',{"user":req.session.uid});
        }

        }
        else{
          res.send("Invalid Userid or Password");
        }
      }
    })
  }
}
module.exports = userOperations;
