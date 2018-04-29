const http = require("http");
http.createServer(handleRequestResponse).listen(1234,()=>{
  console.log("Server Start at Port 1234");
});
function handleRequestResponse(req,res){
  console.log("Request come.....",req.url,req.method);
  //res.write("Hello User ");
  if(req.url=='/' && req.method =='GET'){
    staticFileServe('/index.html',res);
  }
  if(isStaticFile(req.url)){
    staticFileServe(req.url,res);
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
  var ext = path.extname(fileName);
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
