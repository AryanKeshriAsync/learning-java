
const arr=[1,2,3,4,5,true,"aryan"]  
//can store different datatypes under same variable
//size of js array are resizeable 
//js copy are shallow copies,
//shallow copies share same references whereas deep copy do not 

// console.log(arr[0]);
// console.log(arr[5],arr[6]);
// console.log(arr);

const arr2=["ironman","batman","kick buttowski"]
// console.log(arr2[2]);

const myArr=new Array(1,2,3,4,5,6) //other way to define arrays
// console.log(myArr.length);
// console.log(myArr.at(2));
// console.log(myArr.concat());

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes last value

// myArr.unshift(8) //adds element in first
// myArr.unshift(9)
// myArr.shift() //removes element from 1st

// console.log(myArr.includes(3));
// console.log(myArr.includes(9)); 

// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(9)); 

const newArr= myArr.join() //converts array to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//+++++++++++slice and splice++++++++++++

console.log("A ",myArr);

const myn1=myArr.slice(1,4);
console.log(myn1);

console.log("B ",myArr);

const myn2=myArr.splice(1,4) //removes the portion of it from the org array
console.log(myn2);

console.log("C ",myArr);















