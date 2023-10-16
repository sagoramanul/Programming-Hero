const ages = [32,25,32,34,26,28];
const ages2 = [22,21,32,36];
const ages3 = [38,42,36,33];
const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges);
console.log(allAges2);

console.log("=====================================================");

const business = 650;
const minister = 450;
const shochip = 250;

const takaPoysa = [650,420,280];

const maximun = Math.max(business, minister, shochip);
const maximun2 = Math.max(...takaPoysa);

console.log(maximun);
console.log(maximun2);