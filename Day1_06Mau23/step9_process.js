console.log(process.argv[2]);

var profiles = ["guest", "user", "admin","owner"];

var param = process.argv[2];

console.log("You requested for", (param < profiles.length ? profiles[process.argv[2]] : profiles[0])+".html");

const { arch } = require('node:process');
console.log(`This processor architecture is ${arch}`);

const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const { chdir, cwd } = require('node:process');

console.log(`Starting directory: ${cwd()}`);
try {
  chdir('./DAY2_07MAY23');
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

const { cpuUsage } = require('node:process');

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(cpuUsage(startUsage));
// { user: 514883, system: 11226 }