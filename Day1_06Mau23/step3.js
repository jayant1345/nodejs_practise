var os = require("node:os");
// const os = require('node:os');
console.log( os.cpus().length );
console.log( os.cpus()[1] );


// var os = require("os");
console.log( os.cpus().length );
// console.log( os.cpus()[0] );
console.log( os.cpus() );
console.log( os.userInfo().username );
console.log ( os.userInfo());

console.log( "total memory ", (((os.totalmem())/1024)/1024) / 1024, " GB" );
console.log( "free memory ", (((os.freemem())/1024)/1024)/1024,"GB" );

console.log( os.machine());

console.log( os.arch());

console.log( os.homedir());