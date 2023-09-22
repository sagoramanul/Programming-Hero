var marks = [40, 54, 68, 59, 96, 74,66];
var sum = 0;

for(var i=0; i<marks.length; i++){
    var element = marks[i];
    sum = sum + element;
}

console.log("Total Numbers: ", sum);


console.log("=========================================");
/*===================================================
===================================================*/


function getArraySum(numbers){
    var sum = 0;

    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [66, 43, 52, 59, 68, 45,75]; 
var result = getArraySum(numbers);
console.log("Total marks is: ", result);