var business = 550;
var minister = 850;

if(business<minister){
    console.log("Minister is Bigger");
}
else{
    console.log("Business is Bigger");
}

console.log("=======================================");
/*===================================================
===================================================*/

var business = 1550;
var minister = 850;
var sochip = 950;


if ( business> minister){
    if(business>sochip){
        console.log("Businessman is Bigger");
    }
    else{
        console.log("Sochip is Bigger");
    }
}
else if(minister> business){
    if(minister>sochip){
        console.log("Minister is Bigger");
    }
    else{
        console.log("Sochip is Bigger");
    }
}



console.log("=======================================");
/*===================================================
===================================================*/


var business = 1550;
var minister = 850;
var sochip = 950;


var findMAx = Math.max(business, minister, sochip);

console.log(findMAx);