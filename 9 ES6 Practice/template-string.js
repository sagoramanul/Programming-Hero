const firstName = "Justin";
const lastName = "Biber";
const fullName = firstName + " " + lastName;


//create template
const fullName2 = `${firstName} ${lastName} ${50+20+30+20-20} is a good singer`;

console.log(fullName);
console.log(fullName2);


//Multiline

const multiline = "I am a student\n"
    + "I live in Dhaka\n"
    + "My department is CIS"

const multiline2 = 
`I am a student
I live in Dhaka
My department is CIS`

console.log(multiline);
console.log("=====================");
console.log(multiline2);