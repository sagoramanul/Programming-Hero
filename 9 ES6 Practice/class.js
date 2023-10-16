class Student {
    constructor (sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Starling High School"
    }
}

const student1 = new Student(1, "Sagor");
const student2 = new Student(2, "Shuvo");

console.log(student1, student2);