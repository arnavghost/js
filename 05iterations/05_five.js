const coding= ["java", "javascript", "python", "c++"];

// const values= coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);
// foreach doesnt return anything


const myNums= [1, 2, 3, 4, 5];


//filter

const newnums= myNums.filter( (num) => num> 3)
console.log(newnums); // [4, 5]


const newnums2= myNums.filter( (num) => {
    return num > 3;
})
//if use {} then a scope is created and you need to return the value
console.log(newnums2); // [4, 5]

 