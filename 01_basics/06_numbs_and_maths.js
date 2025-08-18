const score= 400
const balance= new Number(100)
console.log(score, balance)
console.log(typeof score, typeof balance)

console.log(balance.toString().lenght);
console.log(balance.toFixed(2));

const n1= 123.8966
console.log(n1.toPrecision(3)); // 123
console.log(n1.toPrecision(5)); // 123.90

const n2= 1000000
console.log(n2.toLocaleString()); // 1,000,000 // us precision value

//*************** MATHS****************** */
console.log(Math);// built-in object
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(10, 20, 30)); // 30

console.log(Math.random()); // 0-1
console.log((Math.random() * 10) + 1); // 1-10

const min= 10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)+min)); // 10-20