//initializing a new buffer sets the perm. size of that buffer (cannot expand or shrink) - sorta like defining array lengths in c#;
var buf = new Buffer("Hello", "utf-8");

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write("wo");
console.log(buf.toString());

buf.write("helloworld");
console.log(buf.toString());
