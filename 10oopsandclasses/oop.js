//object literal
const user={
    username: "Arnav",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from db")
        // console.log(`username: $(this.username)`)
        console.log(this) // tells abt the current context 
    }
}

console.log(user.username);
console.log(user.getUserDetails());



function user(username,logInCount,isLoggedIn){
    this.username=username,
    this.logInCount= logInCount,
    this.isLoggedIn= isLoggedIn

    // return this;
}

const userone= new user("arnav",12,true)
const usertwo= new user("arn",8,false)
console.log(userone)
console.log(usertwo)

