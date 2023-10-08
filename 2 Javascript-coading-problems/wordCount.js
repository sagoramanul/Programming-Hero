var speech = "This is amanul islam, Student at faculty of science and information technology";

console.log(speech);
console.log(speech.length);
console.log(speech[5]);

var count = 0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
console.log(count);