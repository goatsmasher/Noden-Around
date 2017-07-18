var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 13;
view[2] = 4;

console.log(view);