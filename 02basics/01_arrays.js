const myArr= [0,1,2,3,4,5] 
console.log(myArr[0]) 

const myArr2 = new Array(1,2,3,4)

//array methods

myArr.push(6) //adds an element to the end of the array
console.log(myArr);

console.log(myArr.pop()) //removes the last element of the array and returns it
console.log(myArr);

console.log(myArr.unshift(-1)); //adds an element to the beginning of the array
console.log(myArr.shift()) //removes the first element of the array and returns it
console.log(myArr);

console.log(myArr.includes(2)); //checks if the array includes the element and returns true or false
console.log(myArr.indexOf(2)); //returns the index of the element in the array

const newArr= myArr.join();//joins the elements of the array into a string
console.log(typeof newArr); //string    
console.log(newArr);


//slice , splice

console.log("Original Array:", myArr);

// Using slice (does not change original)
const slicedArr = myArr.slice(1, 3); // elements at index 1 and 2
console.log("After slice (1,3):", slicedArr);
console.log("Array after slice:", myArr);

// Using splice (changes original)
const splicedArr = myArr.splice(1, 3); // removes elements at index 1,2,3
console.log("After splice (1,3):", splicedArr);
console.log("Array after splice:", myArr);








//javascript when u use array-copy-operator it creates a shallow copy of the array

/*in JavaScript, the array copy operator (... spread) creates a shallow copy of the array. This means that top-level elements are copied into a new array, 
 so changes to primitives (numbers, strings, booleans) in the copy do not affect the original.
  However, if the array contains objects or nested arrays, only their references are copied — so changes inside those nested objects/arrays will still reflect in the original.
*/

/*
slice()
Creates a shallow copy of part of an array into a new array.
Does NOT modify the original array.

splice()
Used to add, remove, or replace elements in an array
Modifies the original array.
*/