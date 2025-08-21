const nums= [1, 2, 3];

//with function 
// const total= nums.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator ${accumulator} and cuurent value ${currentValue}`);
//     return accumulator + currentValue
// } , 0 )

// console.log(total);

//with arrow function 
const total= nums.reduce ( (acc,curr) => acc+curr,0 )
console.log(total);


const cart= [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "py",
        price: 999
    },
    {
        itemname: "mobile dev",
        price: 12000
    },
    {
        itemname: "backend",
        price: 200
    },
]

const totalprice= cart.reduce ( (acc,item) => acc+item.price , 0)
console.log(totalprice);