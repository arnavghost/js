//object destructing

const course={
    coursename: "maths",
    price: "100",
    courseInstructor: "John",
}
// console.log(course.courseInstructor)
const {courseInstructor: instructor}= course; //object destructuring

//api : u can get data in object and array also 

//json format for api calling
// {
//     "name":"arnav",
//     "coursename": "maths",
//     "price": "100",
// }

// array of objects
// [
//     {},
//     {},
// ]
