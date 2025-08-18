//singleton - if we declare it as literal then not  singleton , with constructor it is singleton

//object literals

const mySym= Symbol("key1"); //symbol is a unique identifier

const user={
    name:"Arnav",
    "fullname": "Arnav K", 
    age:21,
    [mySym]: "key2", // using symbol as a key // USE [] to use symbol as key it will print the tyeof as symbol onlt then 
    location:"India",
    email:"arnav@gmail",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(user.email)
console.log(user["email"]); // accessing property using bracket notation
console.log(user["fullname"])
console.log(typeof user.mySym)
console.log(user[mySym]); // accessing property using symbol key

user.email= "arnavkhandewal@gmail"
Object.freeze(user); // freeze the object so that it cannot be modified

console.log(user);

user.greeting= function(){
    console.log("hello")
}
console.log(user.greeting); // will print the function
console.log(user.greeting()); // will call the function and print "hello"


user.greeting2= function(){
    console.log(`hello my name is ${this.name} and my email is ${this.email}`);
}
console.log(user.greeting2()); // will call the function and print "hello my name is Arnav and my email is arnavkhandewal@gmail"