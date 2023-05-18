var fs = require("fs");

fs.readFile("temp/temp.txt","utf-8",function(error,data){
    if(error){
        console.log("Error",error);
    }else{
        console.log(data);
    }
});