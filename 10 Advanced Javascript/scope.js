let bonus = 10;

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    if (result > 9){
        const mood = "Happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3,7);
console.log(bonus);
console.log(output);