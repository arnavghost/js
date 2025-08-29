// A Promise represents a task that may finish in the future (async work).
// It has 3 states: pending -> fulfilled (resolved) OR rejected.

// ---------------------- Promise Example 1 ----------------------

const promise1 = new Promise(function(resolve, reject){
    // Simulating an async task (like DB call, cryptography, network call)
    setTimeout(function(){
        console.log('async task is complete')
        resolve()   // tell promise that task is done successfully
    },1000)
})

// consuming the promise with .then
promise1.then(function(){
    console.log("promise consumed");   // runs only after resolve() is called
})

// ---------------------- Promise Example 2 ----------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()   // promise resolved
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

// ---------------------- Promise Example 3 ----------------------

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // passing data when resolved
        resolve({username: "arnav" ,email: "arnav@1400"})
    },1000)
})

promise3.then(function(user){
    console.log(user) // prints object from resolve
})

// ---------------------- Promise Example 4 ----------------------

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false   // try changing to true
        if(!error){
            resolve({username:"Arnav", password:"123"})  // success
        }else{
            reject('error: something went wrong')       // failure
        }
    },1000)
})

promise4
.then((user) => {    
    console.log(user);     // prints user object
    return user.username   // return value to next .then
})
.then((username) => {
    console.log(username)  // prints username only
})
.catch(function(error){    // handles reject
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))
// finally runs no matter what (success/failure)

// ---------------------- Promise Example 5 + async/await ----------------------

const promise5 = new Promise(function(resolve,reject){ 
    setTimeout(function(){
        let error = false  // try true to see catch
        if(!error){
            resolve({username:"Arnav", password:"123"})
        }else{
            reject('error js went wrong')
        }
    },1000)
})

// async/await is a cleaner way to consume promises
async function consumePromise5(){
    try {
        const response = await promise5 // wait until resolved
        console.log(response)
    } catch (error) {
        console.log(error) // catch block for reject
    }
}
consumePromise5()

// ---------------------- Using fetch (built-in promise) ----------------------

async function getallUsers(){
    try {
        // fetch returns a promise -> waits until response comes
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // converting to JSON
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getallUsers()

// Same fetch with .then syntax (without async/await)
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json() // also returns a promise
})
.then((data)=>{
    console.log(data)  // log the user data
})
.catch((error)=> console.log(error))
