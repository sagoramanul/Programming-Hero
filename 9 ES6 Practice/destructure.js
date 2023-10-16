const person = {name: "Toms Cruise", age: 17, address: "Dhaka Cantonment", phone: '01895623014', friends: ['Habib', 'Rakib', 'Rahim', 'Rahman']};

// const Name = person.name;
// const Phone = person.phone;
// const Age = person.age;


const {name, address, phone} = person;

const myFriends = ['sakib khan', 'rayhan khan', 'redwan khan', 'raju khan']
const [chotoFriend, boroFriend] = myFriends;

// console.log(Name, Phone);
// console.log(Name, Age);

console.log(name, address, phone);
console.log(chotoFriend, boroFriend);
