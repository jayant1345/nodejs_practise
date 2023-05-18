var EventEmitter = require("events").EventEmitter

var myevent = new EventEmitter();
function repeatevents(){
    console.log("this is jayantevent occured");
}
myevent.on("jayantevent", repeatevents);
var count=0;

// myevent.emit("jayantevent");
// console.log(myevent.listenerCount());


if(count < 5){
    console.log(myevent.listenerCount());
    setTimeout(()=>{myevent.emit("jayantevent")}
,2000);
  count= count+1;
};

