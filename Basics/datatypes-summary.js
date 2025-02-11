// # Primitive Data Types

// 7 Primitive Data Types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('223')
const anotherId = Symbol('223')

 console.log(id === anotherId) // false

// const bigNumber = 3457864538846n // BigInt

const heroes = ["Shaktiman", "Superman", "Batman"] // Array
let myObj = {
    name: "Shivam",
    age: 20,
}

// const myfunction = function(){
//     console.log("Hello World!")
// }

// console.log(typeof myfunction) // bigint

// console.log(typeof myObj) // object
// console.log(typeof heroes) // object



// Reference Data Types(Non-Primitive Data Types)
// 1. Object
// 2. Array
// 3. Function // 3 are main reference data types
// 4. Date
// 5. RegExp
// 6. Map and WeakMap
// 7. Set and WeakSet
// 8. Error
// 9. Math
// 10. JSON


//  ++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myLeetcodeName = "Shivam_2233";

let anotherName = myLeetcodeName;
anotherName = "Storm77";

console.log(myLeetcodeName);
console.log(anotherName);


let userOne = {
    email: "shivamkumar@gmail.com",
    upi: "shivamkumar@upi"
}

let userTwo = userOne 

userTwo.email = "shivamkumar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);