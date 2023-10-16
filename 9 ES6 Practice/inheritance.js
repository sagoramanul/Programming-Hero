class Parents {
    constructor(){
        this.father = "Rhanvuem jheb";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Shifat");
const baby2 = new Child("Rafin");

console.log(baby);
console.log(baby2);