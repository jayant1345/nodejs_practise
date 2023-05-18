var fs = require("fs");

console.log("log before the file operated");

// fs.mkdirSync("temp");
// fs.writeFileSync("temp/temp.txt","this is first line", "utf-8");
// fs.appendFileSync("temp/temp.txt", "\nthis is second line","utf-8");

if(fs.existsSync("temp")){
    if(fs.existsSync("temp/temp.txt")){
        fs.appendFileSync("temp/temp.txt","\nThis is second line","utf-8");
    } else{
    fs.writeFileSync("temp/temp.txt","this is first line","utf-8");
    fs.appendFileSync("temp/temp.txt","\nThis is second line","utf-8");};
    
    
}else{
    fs.mkdirSync("temp");
    fs.writeFileSync("temp/temp.txt","this is first line","utf-8");
    fs.appendFileSync("temp/temp.txt","\nThis is second line","utf-8");};
 console.log("this is after file created");   

 