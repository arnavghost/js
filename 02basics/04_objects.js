// const tinderUser= new Object()   //singleton obeject

// other way declare object : non-singleton object
const tinderUser={} 

tinderUser.id= "123"
tinderUser.name="arnav"
tinderUser.isLoggedIn= false;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // to get keys of the object as array
console.log(Object.values(tinderUser))// // to get values of the object as array
console.log(Object.entries(tinderUser)) // to get key-value pairs of the object as an array 
console.log(tinderUser.hasOwnProperty("id")) // to check if the object has a property with the given key



const regularUser={
    email: "abc@gmail",
    fullname:{
        username:{
             firstname: "Arnav",
             lastname: "Khandewal"
        }
    }
}

console.log(regularUser.fullname)
// accessing nested object properties
console.log(regularUser.fullname.username.firstname); 


const obj1= {
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// 1. const obj3={obj1, obj2}; //// this will create an object with obj1 and obj2 as properties
//2.  const obj3= Object.assign({}, obj1, obj2) //target:{},source:obj1,obj2

const obj3={...obj1, ...obj2} // using spread operator to merge obj1 and obj2

console.log(obj3)



//example to see when u uare using database values
const users=[
    {
        id: 1,
        email: "arnav@gmail"
    },
    {
        id: 2,
        email: "arnav@gmail"
    }, 
    {
        id: 3,
        email: "arnav@gmail"
    }
]
//how to fetch 
console.log(users[1].email)
