var EventEmitter = require("events").EventEmitter;

var myevent = new EventEmitter();

function firstlistner(){
    console.log ("jayantevent is happend first time");
};

function secondlistner(){
    console.log("jayantevent is happended second time");

};

myevent.on("jayantevent", firstlistner);

myevent.once ("jayantevent", secondlistner);


console.log(myevent.listenerCount("jayantevent"),"nos of times jayantevents occured");

// myevent.off("jayantevent",secondlistner);

myevent.emit("jayantevent");
myevent.emit("jayantevent");
myevent.emit("jayantevent");
myevent.emit("jayantevent");