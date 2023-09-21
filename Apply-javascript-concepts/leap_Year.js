const year = 2028;

let reminder = year%4;

if (reminder == 0){
    console.log("This year is a leap year");
}
else{
    console.log("This year is not a leap year");
}



function isLeapYear(yaars){
    const reminder = yaars % 4;
    if (reminder == 0){
        return true;
    }
    else{
        return false;
    }
}

const chk2028 = isLeapYear(2028);
console.log(chk2028);