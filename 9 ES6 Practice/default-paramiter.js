function add(num1, num2 = 10){
    // if (num2 == undefined){
    //     num2 = 0;
    // }

    //num2 = num2 || 10;
    return num1 + num2;
}

let total = add(25);
console.log(total);