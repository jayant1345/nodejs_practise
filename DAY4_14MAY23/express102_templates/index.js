var express = require("express");

var app = express();
var config = require("./config.json")

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home");
})

app.listen(config.port,"localhost",function(error){
    if(error){
        console.log("Error",error);

    }else{
        console.log(`server is running on ${config.host+":"+config.port}`);
    }
})