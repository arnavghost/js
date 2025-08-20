//iife - immediately invoked function expression

//; is to be added after each iife

//named iffe
(function one () {
    console.log("hello")
})(); 
//() - this is an IIFE, it runs immediately after being defined:to avoid global scope pollution problem

//unnamed iife
( (name) => {
    console.log(`hello ${name}`);
})("arnav");