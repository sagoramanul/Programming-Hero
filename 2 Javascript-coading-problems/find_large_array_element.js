var marks = [40, 54, 68, 59, 96, 74,66];
var max = marks[0];

for(var i =0; i < marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}

console.log("Highest value is:", max);
