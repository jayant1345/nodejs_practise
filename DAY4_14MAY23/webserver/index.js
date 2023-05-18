var http = require("http");
var fs = require("fs");
var company_name ="Jayant's company";

var server = http.createServer(function(request,response){
    // console.log(request.url);
    // response.end();

    if(request.url == "/favicon.ico"){
        console.log("received a request for /favicon.ico");
        response.write("");
        response.end();
    }else if(request.url == "/"){
        console.log("received a request for", request.url);

        tempthtml = fs.readFileSync("./index.html","utf-8").replace("{ title }",company_name);
        // console.log(tempthtml);
        response.write(tempthtml);
        response.end();

    // }else if (request.url == "/about.html"){
    //     console.log(response.url);
    //     response.write(fs.readFileSync("./index.html","utf-8"));
    //     // response.write(fs.readFileSync(response.url+".html","utf-8"));
    //     response.end();
    }else{
        fs.readFile("."+request.url,function(error,data){
            if(error){
                response.writeHead(404,{"Content-type":"Text/html"});
                response.write(fs.readFileSync("./notfound.html","utf-8"));
                response.end();

            }else{
                response.write(data.toString().replace("{ title }" , company_name));
                response.end();
            }
        })

    }

});

server.listen(2023,"localhost",function(error){
    if(error){
        console.log("Error",error);
    }else{console.log("web server is now live on localhost:2023")}
});