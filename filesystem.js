// //using a buffer

// var fs = require("fs");

// var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");

// console.log(greet);

// var greet2 = fs.readFile(__dirname + "/greet.txt", "utf8",
// 	(error, data) => {
// 		console.log(data);
// 	});

// console.log("Done!");


// //using a stream

// var fs = require("fs");

// var readable = fs.createReadStream(__dirname + "/greet.txt", { encoding: "utf8", highWaterMark: 32 * 1024 });
// var writeable = fs.createWriteStream(__dirname + "/greetcopy.txt");

// readable.on("data", (chunk) => {
// 	writeable.write(chunk);
// });



//using pipes

var fs = require("fs");
var zlib = require("zlib"); //gzip!!! -> compressed file

var readable = fs.createReadStream(__dirname + "/greet.txt");
var writeable = fs.createWriteStream(__dirname + "/greetcopy.txt");

var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");

var gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);