function callbackfun(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

callbackfun('Sagir Uddin', '25');

function wash_hand(){
    console.log('Wash your hand');
}

function take_shwr(){
    console.log('Take your shawar');
}

callbackfun('Amanul', 25, wash_hand);
callbackfun('Jagir uddin', 30, take_shwr);