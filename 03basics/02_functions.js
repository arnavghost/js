function calculatePrice(...n1){   // Using rest parameters to accept any number of arguments
    return n1;
}

console.log(calculatePrice(100, 200, 300, 400)); // [100, 200, 300, 400] :gives array 

// function calculatePrice(val1,val2, ...n1){ //val1:100, val2: 200, n1: [300, 400]   
//     return n1;
// }

// console.log(calculatePrice(100, 200, 300, 400));

const user={
    username: "Arnav",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

//  second way to pass object instead of creatinf user
handleObject({
    username: "Arnav",
    price: 100 
})

//for array

const a= [1, 2, 3, 4, 5];
function handleArray(getarray){
    return getarray[1];
}
console.log(handleArray(a)); // 2