// function name(){
//     console.log("arnav");
// }
// name();

function add(n1,n2){    //n1, n2 are parameters
    // let result=(n1+n2);
    // return result;
    return (n1+n2); 
}
const result= add(4,5); // 4, 5 are arguments
console.log(result);   // 9

function logInUserMessage(username){
    if(username === undefined){      //if(!username)
        console.log("please enter a username");
        return
    }
    return`${username} is logged in`;
}
console.log(logInUserMessage("Arnav"));
console.log(logInUserMessage());// (undefined) is logged in



