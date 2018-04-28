import { write } from 'fs';

const fs = require('fs');
const p = "/Users/amit/Documents/JS-Jan-Examples/SPA";
console.log(__dirname);
const path = require("path");
var songPath = "/Volumes/AmitPassPort/Class-Recording/HttpServerNodeDay2.mov";
var newPath = path.normalize(__dirname+"/..");
console.log("New Path is ",newPath);
const fullPath = path.join(newPath,"/SPA/home.html");
console.log("Full Path is ",fullPath);

var readStream = fs.createReadStream(songPath,{highWaterMark:10});
var writeStream = fs.createWriteStream("/Volumes/AmitPassPort/Class-Recording/CopiedHttpServerNodeDay2.mov");
readStream.pipe(writeStream);
var c = 1;
// readStream.on('data',(chunk)=>{
//   console.log("CHUNK "+c+" ",chunk);
//   c++;
//   writeStream.write(chunk);
// });
// readStream.on('end',()=>{
//   console.log("Write Done...");
// })

// fs.readFile(songPath,(error,content)=>{
//   if(error){
//     console.log("Can't Read",error);
//   }
//   else{
//     console.log("Read is DONE>>>>>>>>");
//     fs.writeFile("/Volumes/AmitPassPort/Class-Recording/CopyHttpServerNodeDay2.mov",content,(err)=>{
//       if(err){
//         console.log("Can't Write....");
//       }
//       else{
//         console.log("Write Done....");
//       }
//     })
//     //console.log("Content is "+content);
//   }
// });


//fs.readFile('')
