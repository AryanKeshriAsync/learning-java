//Primitive

//7 types- string,number,boolean,null,undefined,symbol,BigInt

const score=100 //number
const scoreValue=200.4 //number

const isLoggedIn=false //bool
const outsideTemp=null //null
let username //undefined
const userEmail=undefined

const Id=Symbol('123')
const anotherId=Symbol('123')

const bigNo=325641258976528776n

// console.log(Id===anotherId); //false



//non primitive

//array,objects,functions

let arr=["aryan","virat","emraan","rdj"]
let arr2=[1,2,3,4]
let arr3=[]
let myObj = {
    name:"Aryan",
    rollNo:21,
    isStudent:true
}

//  console.log(arr);
// console.log(myObj);
// console.log(typeof bigNo);
// console.log(arr2);
// console.log(arr3);
// console.log(typeof arr2);
// console.table([arr,arr2])

let myFunction=function(){
    console.log("Hello World!");
    
}
// myFunction();

let func=function(a,b){
    console.log(a+b);
    
}
// func("hello"," world")
// func(10,-1)

let func2=function(a,b,c){
    return a+b+c
}
console.log(func2(1,2,3));
func2(1,2,3)






