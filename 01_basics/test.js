// const a=10
// let b

// let id=Symbol('123')
// let anotherId=Symbol('123')

// let c=15
// const d="15"

// console.log(id===anotherId);
// console.log(c==d);
// console.log(c===d);

// let arr=[1,2,3,4]
// console.log(arr);

// let sum=0;
// let prod=1;

// for(let i=0; i<4; i++){
//     sum+=arr[i]
//     prod*=arr[i]
// }

// console.log(sum,prod);

// let myObj={
//     name:'Aryan Keshri',
//     age:19,
//     department:'IT'
// }

// console.log("MY name is",myObj.name,"Studying Btech");
// console.log(myObj.age, myObj.department);

// let myFunc= function(a,b){
//     console.log(a+b);
// }
// myFunc(2,7)

// let myFunc2= function(c,d){
//     return c*d;
// }

// let prod2=myFunc2(6,7);
// console.log(myFunc2(6,7));
// console.log(prod2);

// myFunc("Happy"," Sad")
// console.log(myFunc2("Happy","Sad"));

// console.log(typeof(myFunc),typeof(myFunc2));
// console.log(typeof(myObj));
// console.log(typeof(arr));
// console.log(typeof(null));
// console.log(typeof(arr[2]));
// console.log(typeof(id));



let myName= new String('Aryan Keshri')
console.log(myName);

let myCllg= new String('BPIT')
console.log(myCllg);

console.log(`my name is ${myName} and currently studying in ${myCllg}`);

console.log(myName[2],myCllg[0]);

// console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.concat(myCllg));
console.log(myName.length);
console.log(myName.charAt(7));
console.log(myName.indexOf('K'));
console.log(myName.slice(-5,8));
console.log(myName.substring(-5,8));




let user=new String('    Username    ')
console.log(`this is ${user} xyz`);
console.log(`this is ${user.trim()} xyz`);
console.log(`this is ${user.trimEnd()} xyz`);
console.log(`this is ${user.trimStart()} xyz`);

let link=new String("https://aryankeshri.com/aryan%20bpit")

link=link.replace('.com','Dotcom')

console.log(link.replace('%20','@'));
console.log(link.replaceAll('/','-'));

let words=new String("a quick brown fox jumps over the lazy dog")
let newWords=words.split(" ")
console.log(newWords);
console.log(words.includes("fox"));
console.log(words.includes("cow"));





















