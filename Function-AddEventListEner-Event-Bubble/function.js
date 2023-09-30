var nums = [5,12,89,86,15];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num*2);    
}

console.log("===================================================");

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
        console.log(num, ': is even number'); 
    }else{
        console.log(num, ': is odd number'); 
    } 
}

console.log("===================================================");

friendAge = [17, 24, 22, 21, 19, 20, 25]

for(let i = 0; i < friendAge.length; i++){
    const age = friendAge[i];
    if(age % 2 == 0){
        console.log(age, ': Is even Number');
    }else{
        console.log(age, ': Is odd Number');
    }
}

console.log("====================USING FUNCTION===============================");


function evenify(num) {
    if(num % 2 == 0){
        console.log(num, ': Is even Number');
    }else{
        console.log(num, ': Is odd Number');
    }
}

Marks = [17, 24, 22, 21, 19, 20, 25]

for(let i = 0; i < Marks.length; i++){
    const mark = Marks[i];
    evenify(mark);    
}

console.log("===================================================");

friendAge = [17, 24, 22, 21, 19, 20, 25]

for(let i = 0; i < friendAge.length; i++){
    const age = friendAge[i];
    evenify(age);
}

















