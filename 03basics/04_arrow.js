// const user={
//     name: "John",   
//     age: 30,

//     welcomeMessage: function() {
//         console.log(`Welcome ${this.name}`);
//         // console.log(this);
//     }
// }

// // user.welcomeMessage(); // Output: Welcome John
// // user.username = "Jane"; 
// // user.welcomeMessage()

// console.log(this)


//browser consists of window as a global object *****************

//1. const a= function(){             ///nothing comes
//     let username= "Arnav"
//     console.log(this.username); // undefined in strict mode, "Arnav" in non-strict mode
// }
// a()

//2. const a = () => {
//     let username= "Arnav"
//     console.log(this);
// }
// a()


//arrow functions**********

//curly braces u need to use return statement:explicit return
// const addtwo= (n1,n2) => {
//     return n1+n2
// }
//addtwo(2,3)

//implicit return in arrow functions:no need for return statement if only one expression is there
const addtwo= (n1,n2) => (n1+n2) 
addtwo(2,3)

// const addtwo= (n1,n2) => ({username:"arnav"}) // need to wrap the object