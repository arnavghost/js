const n1= [1, 2, 3, 4, 5];
const n2= [5, 6, 7, 8, 9];

// console.log(n1.push(n2)); // adds n2 as a single element to n1

// const n3= n1.concat(n2); // concatenates n2 to n1
// console.log(n3);

// const n4=[...n1,...n2]; // spread operator to concatenate n1 and n2
// console.log(n4);


console.log(Array.isArray("hello")); // false
console.log(Array.isArray(n1)); // true

console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o'] // converts string to array
console.log(Array.from({name:"arnav"}));

let score1= 100
let score2= 200     
let score3= 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] // creates an array from the arguments
