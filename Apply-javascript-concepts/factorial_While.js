var i =1;
factorial = 1;
while(i<=10){
    factorial = factorial*i;
    //console.log(i, factorial);
    i++
}

console.log(factorial);





function factori(n){
    var i =1;
    factori = 1;
    while(i<=n){
        factori = factori*i;
        i++
    }
    return factori;
}

var result = factori(4);
console.log(result);