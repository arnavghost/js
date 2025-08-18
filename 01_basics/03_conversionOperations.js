let score= "33abc" // 

console.log(typeof score);

let valueInNUmber= Number(score); //convert string to number
console.log(typeof valueInNUmber);
console.log(valueInNUmber); // will give NaN (not a number) because it cannot convert "33abc" to a number

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

let booleanIsLoogedIn= Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); // will give false if isLoggedIn is undefined or null

/*
1 -> true; 0 -> false
"" -> false; "abc" -> true
*/

//************ operations **************

console.log("1" + 2); // 12
console.log(1 + "2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32