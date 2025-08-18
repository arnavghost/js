const name= "arnav"
const count= 10
// console.log(name+count+" value") old way to concatenate the string

console.log(`hello my name is ${name} and count is ${count}`);
// this is called string intercollision.use of baptix

const Name= new String("arnavk")//other way to declare

console.log(Name[0]);
console.log(Name.__proto__)

console.log(Name.length); //length of string
console.log(Name.toUpperCase()); //convert to upper case
console.log(Name.charAt(0)); //get character at index 0
console.log(Name.indexOf("k")); //get index of character 'k'
console.log(Name.lastIndexOf("a")); //get last index of character 'k'

const newName= Name.substring(0, 4); //get substring from index 0 to 4
console.log(newName); //print substring
 
const newName2= Name.slice(0, 4); //get substring from index 0 to 4
console.log(newName2); //print substring

console.log(Name.split("a")); //split string by 'a' character

const a= "   hello";
console.log(a.trim()); //remove whitespace from both ends of the string

const url= "https://www.google.com";

console.log(url.replace("https", "http")); //replace 'https' with 'http'
console.log(url.includes("google")); //check if 'google' is present in the url
