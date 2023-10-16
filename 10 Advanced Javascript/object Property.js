const students = [
    {id: 1, name: "Omer sany"},
    {id: 2, name: "Rayhan akond"},
    {id: 3, name: "Mostofa Siddique"},
    {id: 4, name: "Washim akram"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>2);
const biggerFind = students.find(s => s.id>2);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerFind);