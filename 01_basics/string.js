const name="Aryan Keshri"
const repo=20
const id="great@yahoo.in"

// console.log(name + " "+ repo + " counts"); old syntax,recommended not to use 

console.log(`Hello my name is ${name} and my repo count is ${repo} and my id is ${id}`);

let name2= new String('aryan') //another way to define string //much more recommended to use

let school= new String('NKBPS')
console.log(`i studied from school ${school}`);



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

let xyz= new String('Opera')
xyz.__proto__
console.log(xyz.slice(-4,5));
console.log(xyz.charAt(4));
console.log(xyz.indexOf('O'));
console.log(xyz.substring(-4,5));

const xyz2= new String('   Opera    ')
console.log(xyz2);
console.log(xyz2.trim());
console.log(`I use ${xyz2} browser`);
console.log(`I use ${xyz2.trim()} browser`);
console.log(`I use ${xyz2.trimEnd()} browser`);
console.log(`I use ${xyz2.trimStart()} browser`);

const userId= new String("cadence@global.co.in")
console.log(userId.replace(['.co.in'],['.com']));
console.log(userId.replaceAll(['.'],['dot']));
console.log(userId.includes('global'));
console.log(userId.includes('semicon'));

let words=new String('The quick brown fox jumps over a lazy dog')
let newWords=words.split(" ")
console.log(newWords);
console.log(newWords[4]);

let newWords2=words.split("")
console.log(newWords2);
console.log(newWords2[16]);

console.log(words.startsWith("The"));
console.log(words.startsWith("The",0));































