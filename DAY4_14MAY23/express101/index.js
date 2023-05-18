var express = require("express");
var app = express();
var company_name= "Jayant's company";
//-------------------- static file handling
// app.use(express.static(__dirname+"/public",{ index : "app.html"}));
//-------------------


//------------REST FULL OPERATION
//------- default route
app.get("/",function(req,res){
    // res.send("<h1>This is testing</h1>");
    res.sendFile(__dirname+"/public/app.html");
});
//-------------name route
// app.get("/about.html",function(req,res){
//     res.sendFile(__dirname+"/public/about.html");
// });

// app.get("/product.html",function(req,res){
//     res.sendFile(__dirname+"/public/product.html");
// });
//--- wild card route
app.get("**",function(req,res){
    res.sendFile(__dirname+"/public/"+req.url);
})

// app.get();
// app.post();
// app.put();
// app.delete();
app.listen(3030,function(error){
    if(error){
        console.log("Error", error);
    }else{
        console.log("server is live on localhost:3030")
    }
});