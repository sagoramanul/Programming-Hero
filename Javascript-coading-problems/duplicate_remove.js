var names = [4, 5, 4, 6, 5, 5, 7, 8, 2, 9, 6, 3, 3];
var uniqueName = [];

for(var i =0; i < names.length; i++){
    var element = names[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);
