var num = 2.8685;

var result = Math.floor(num);
var result1 = Math.ceil(num);
var result2 = Math.round(num);

console.log(result);
console.log(result1);
console.log(result2);

console.log("===================================");
//Generate 1 random Numbers
var randomNumber = Math.random()*10;
var output = Math.round(randomNumber);

console.log(output);

console.log("===================================");
//Generate 10 random Numbers
for (var i = 0; i<5; i++){
    var randomNumber = Math.random()*6;
    var output = Math.round(randomNumber);

    console.log(output);
}