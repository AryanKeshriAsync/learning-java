const a=10
let b

let id=Symbol('123')
let anotherId=Symbol('123')

let c=15
const d="15"

console.log(id===anotherId);
console.log(c==d);
console.log(c===d);

let arr=[1,2,3,4]
console.log(arr);

let sum=0;
let prod=1;

for(let i=0; i<4; i++){
    sum+=arr[i]
    prod*=arr[i]
}

console.log(sum,prod);

let myObj={
    name:'Aryan Keshri',
    age:19,
    department:'IT'
}

console.log("MY name is",myObj.name,"Studying Btech");
console.log(myObj.age, myObj.department);

let myFunc= function(a,b){
    console.log(a+b);
}
myFunc(2,7)

let myFunc2= function(c,d){
    return c*d;
}

let prod2=myFunc2(6,7);
console.log(myFunc2(6,7));
console.log(prod2);

myFunc("Happy"," Sad")
console.log(myFunc2("Happy","Sad"));

console.log(typeof(myFunc),typeof(myFunc2));
console.log(typeof(myObj));
console.log(typeof(arr));
console.log(typeof(null));
console.log(typeof(arr[2]));
console.log(typeof(id));




