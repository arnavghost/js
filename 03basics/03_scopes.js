// Scopes in JavaScript:block scope and global scope

var c= 500
let a=200

if(true) {
    let a = 100
    const b = 200
    var c = 300
    console.log("inner", a) // will print 100
}
console.log(a)//wont be printed for the inner one
console.log(b)//wont be printed for the inner one
console.log(c)////will be printed: thats why var is not used 




function one(){
    const username= "arnav"

    function two(){
        const website= "youtube"
        console.log(username) // will print "arnav"
    }
    // console.log(website) // will not be printed: website is not defined in this scope

    two() // calling the inner function to print username
}

one()


//imp

function addone(num){
    return num+1
}
addone(5)

const addtwo= function(num){
    return num+2
}
addtwo(5)