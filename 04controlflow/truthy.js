const userEmail= "arnav@gmail"

if (userEmail) {
    console.log("Email is present");
}else{
    console.log("Email is not present");
}

//falsy values
false,0,-0,0n,BigInt,"",null,undefined,NaN

//truthy values
"0", 'false' , " " , [], {}, function(){}, Symbol(), Infinity, -Infinity
// Example of truthy value



//nullish coalescing operator ( ?? ): null undefined

let val1;
val1= 5 ?? 10;
console.log(val1); // Output: 5

val2 = null ?? 10;
console.log(val2); // Output: 10

let val3 = undefined ?? "default";
console.log(val3); // Output: "default"

//ternsary operator
// condition ? expressionIfTrue : expressionIfFalse

//eg
const price=100
const discount = price > 50 ? "20% off" : "No discount";
console.log(discount); // Output: "20% off"