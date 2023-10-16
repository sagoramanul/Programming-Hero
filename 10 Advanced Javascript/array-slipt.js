
//slice
//==========
const num = [1,2,3,4,5,6,7,8];
const part = num.slice(4,7);

//console.log(num);
console.log(part);


//splice
//==========
const removes = num.splice(3,6);
console.log(removes);
console.log(num);


//Array Join
//=============

const together = num.join(", ")
console.log(together);

