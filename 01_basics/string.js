const name="Aryan Keshri"
const repo=20

// console.log(name + " "+ repo + " counts"); old syntax,recommended not to use 

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

let name2= new String('aryan') //another way to define string

// console.log(name2);
// console.log(name2[0]);
// console.log(name2.__proto__); //(used double underscore)to access prototype

// console.log(name2.length); //length of string
// console.log(name2.toUpperCase()); //for converting string to uppercase
// console.log(name2.toLowerCase());

// console.log(name2.charAt(4)); //gives character at index
// console.log(name2.indexOf('y')); //gives index of char

// const newName= name2.substring(2,5)
// console.log(newName);
// const newName2= name2.slice(-5,3)

const newName3="       Aryan    "
console.log(newName3);
console.log(newName3.trim());

const url="https://aryan.com/aryan%20keshri"

console.log(url.replace('%20','-')); //for replacing a char in string
console.log(url.replace('.com','dotcom'));

console.log(url.includes('aryan')); //checks if the char is in the string
console.log(url.includes('pichai'));
















