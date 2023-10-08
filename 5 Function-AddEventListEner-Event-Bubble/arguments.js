function numbers(a, b){
    sum = 0;
    for(let i = 0; i <arguments.length; i++){
        const num = arguments[i];
        console.log(num);
        sum = sum + num;
    }
    return sum;
}

let result = numbers(6, 8, 5, 9, 7, 10);
console.log(result);