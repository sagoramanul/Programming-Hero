function fibonacchi(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else{
        var fibo = fibonacchi(n-1);
        var nxtElement = fibo[n-1] + fibo[n-2];
        fibo.push(nxtElement);
        return fibo;
    }
}

var result= fibonacchi(15);
console.log(result);