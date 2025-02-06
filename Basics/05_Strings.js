const name = "shivam";
const repoCount = 6;

// console.log(name + " " + repoCount + " is a good");

console.log(' Hello My name is ${name} and my repo count is ${repoCount}'); 


const gameNew = new String("Shivam-hc-com");
console.log(gameNew.__proto__); // {}
console.log(gameNew.length); // 6
console.log(gameNew.charAt(0)); // S
console.log(gameNew.charAt(4)); // a

console.log(gameNew.toLocaleUpperCase()); // SHIVAM
console.log(gameNew.indexOf('i')); // 2


const newString = gameNew.substring(0,4)
console.log(newString); // Shiv

const anotherString = gameNew.slice(-8, 4)
console.log(anotherString);

const newStringOne = " Shivam "
console.log(newStringOne)
console.log(newStringOne.trim()) // without space

const url = "https://shivam.com//shivam%20"

console.log(url.replace('%20', '-')) // replace it

console.log(url.includes('sundar')) // check true or false

console.log(gameNew.split('-'));