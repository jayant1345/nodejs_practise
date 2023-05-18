var fs = require("fs");

// fs.writeFile("temp/temp.txt","this is async mode",function(error){
//     if(error){
//         console.log("jayant error",error);
//     } else{
//         console.log("file was created");
//     }
// });

function writemyfile(message){
    fs.writeFile("temp/temp.txt",message,function(error){
        if(error){
            console.log("jayant error",error);
        }else{
            console.log("file was created");
        }
    });
};

fs.access("temp",function(error){
    if(error){
        fs.mkdir("temp",function(error){
            if(error){
                console.log("Error",error)
            }else{
                writemyfile("folder and file was created");
            }
        })
    } else{
        writemyfile("only the file was created");
    }
})
