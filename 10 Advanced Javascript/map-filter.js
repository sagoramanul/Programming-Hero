const numbers = [3,4,6,5,7,9];
const output = [];

for (let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

console.log("===============================");

function square(elements){
    return elements * elements;
}
const result = numbers.map(function(elements){
    return elements * elements;
});

console.log("===============================");

const result = numbers.map(x => x*x);

console.log(result);

console.log("===============================");

const bigger = numbers.filter(x => x > 4);
const finder = numbers.find(x => x < 4);

console.log(finder);

