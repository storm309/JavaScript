// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate) // Object

// let myCreatedDate = new Date(2025, 7, 6)
// let myCreatedDate = new Date(2023, 7, 6, 5, 3)
// let myCreatedDate = new Date("2023-02-20") // yymmdd
let myCreatedDate = new Date("02-20-2023") // mmdddyy
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // in ms
// console.log(myCreatedDate.getTime()); // compare time in ms
// console.log(Math.floor(Date.now()/1000)); // in second


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)


// '${newDate,getDay()} and the time '

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'Dates'
})


// this is remaining not complete 

