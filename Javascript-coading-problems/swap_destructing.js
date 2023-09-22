var a = 7;
var b = 9;

console.log("Before swap a =", a, "b =", b);

var temp = a;
var a = b;
var b = temp;
console.log("After swap a =", a, "b =", b);

console.log("================================================");

var x = 6;
var y = 9;
console.log("Before swap x =", x, "y =", y);
x = x + y;
y = x - y;
x = x - y;

console.log("After swap x =", x, "y =", y);

console.log("================================================");

var p = 4;
var q = 7;
console.log("After swap p =", p, "q =", q);

[p, q] = [q, p];
console.log("After swap p =", p, "q =", q);
