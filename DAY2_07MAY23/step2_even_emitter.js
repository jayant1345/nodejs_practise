var EventEmitter = require("node:events").EventEmitter

// create new instaunce for event class
var myevent = new EventEmitter();
console.log("this is log from line 5 ,define new event of eventemitter class");

// attach listener for event jayantevent
 myevent.addListener("jayantevent", function(){
    console.log("jayantevent happened line no 9, event occured and listener do activity");
 });

 console.log(" the log of line 12");

 // dispatch the event jayantevent

 setTimeout(() => {
    console.log("log of line 17");
    myevent.emit("jayantevent");
    
 },2000);
