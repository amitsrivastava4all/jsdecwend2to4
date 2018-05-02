const http = require("http");
const https = require("https");
const config  = require("./config/config");
const httpConfig = require("./config/httpsconfig");
const url = require("url");


if(config.protocol=='http'){
  http.createServer(handleRequestResponse).listen(config.port,()=>{
    console.log("Server Start at Port ",config.port," Server Name is ",config.name);
  });
}
else
if(config.protocol=='https'){
https.createServer(httpConfig,handleRequestResponse).listen(config.port,()=>{
  console.log("Server Start at Port ",config.port," Server Name is ",config.name);
});
}

function handleRequestResponse(req,res){
  console.log("Request come.....",req.url,req.method);
  //res.write("Hello User ");
  var urlObject = url.parse(req.url,true);
  var urlPath = urlObject.pathname;
  console.log("Parse Url is ",urlObject);
  res.writeHead(200,{contentType:'text/html'});
  if(urlPath=='/' && req.method =='GET'){
    staticFileServe('/index.html',res);
  }
  if(isStaticFile(urlPath)){
    staticFileServe(urlPath,res);
  }
  if(urlPath=='/roles' && req.method=='GET'){
    const roles = [
      {id:1001,name:'Teacher'},
      {id:1002,name:'Student'}
    ];
    res.end(JSON.stringify(roles));
  }
  if(urlPath=='/login' && req.method=='POST'){
    var data='' ;
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{
      const qs = require('querystring');
      var object = qs.parse(data);
      console.log("Rec Data from Post ",data," QS ",object);
      const User = require("./models/user");
    var userObject = new User(object.userid, object.pwd);
const userOperations = require("./helper/useroperations");
const message = userOperations.isAuthenticate(userObject)?"Welcome "+object.userid:"Invalid userid or password";

    res.end(message);
    })

    //res.end('Post DOne...');
  }
  if(urlPath=='/login' && req.method=='GET'){
    var userid = urlObject.query.userid;
    var password = urlObject.query.pwd;
   // const mail = require("./utils/mail");
   // mail(userid,"Hello","Your doing login...");
    const User = require("./models/user");
    var userObject = new User(userid, password);
const userOperations = require("./helper/useroperations");
const message = userOperations.isAuthenticate(userObject)?"Welcome "+userid:"Invalid userid or password";

    res.end(message);
  }
  // if(req.url=='/' && req.method=='GET'){
  //   staticFileServe(req.url+"index.html",res);
  // }
  // else
  // if(req.url=='/angular.min.js' && req.method=='GET'){
  //  staticFileServe(req.url,res);
  // }
  // res.end();
}
function isStaticFile(fileName){
  const extensions = [".html",".css",".js",".jpeg",".png",".mp3"];
  var path = require("path");
  var ext = path.extname(fileName); // .css
  return extensions.indexOf(ext)>=0;
}

function staticFileServe(fileName,res){
  const path = require("path");
  var fullPath = path.join(__dirname,"/public"+fileName);
  console.log("Full Path is ",fullPath);
  const fs = require('fs');
  var readStream = fs.createReadStream(fullPath);
  readStream.pipe(res);
}
