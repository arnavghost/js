//Dates

let myDate= new Date(); // current date and time
console.log(myDate); // prints current date and time
console.log(myDate.toString()); // prints current date and time in string format
console.log(myDate.toDateString()); // prints current date in string format
console.log(typeof myDate); // prints type of myDate // object

let myDate2 = new Date("2023-10-01"); // date in string format
console.log(myDate2.toString()); // prints date in string format

let myTimeStamp= Date.now(); // current timestamp in milliseconds
console.log(myTimeStamp); // prints current timestamp in milliseconds

console.log(myDate.getTime()); // prints timestamp of myDate in milliseconds

console.log(Math.floor(Date.now()/1000));// prints current timestamp in seconds

console.log(myDate.getDay()); // prints day of the week (0-6) where 0 is Sunday