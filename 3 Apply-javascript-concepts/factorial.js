let factorial = 1;

for (let i=1; i<=5; i++){
    factorial = factorial*i

    console.log(i, factorial);
}




function factorial(num){
    var factorial = 1;
    for(var i=1; i<=num; i++){
        factorial = factorial*i;      
    }
    return factorial;  
}

var result = factorial(10);
console.log(result);








