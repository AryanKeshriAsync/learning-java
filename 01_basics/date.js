let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString("en-IN"));
// console.log(myDate.toLocaleDateString("en-IN"));

// console.log(typeof myDate);

// let createDate=new Date(2006,0,17,6,30,5)  //months start from 0
// let createDate=new Date("2023-01-21")
let createDate=new Date("05-21-2025")
// console.log(createDate.toDateString());
// console.log(createDate.toLocaleDateString("en-IN"));
// console.log(createDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp); //in miliseconds from Jan 1,1970
// console.log(createDate.getTime()); //for comparing use milisec
// console.log(Math.floor(createDate.getTime()/1000)); //for getting time in sec

// let newDate=new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); //showing 1 for Monday
// console.log(newDate.getFullYear());

let newDate = new Date();

console.log(newDate.toLocaleString('default', {
    // weekday: "long",
    dateStyle: "full",
    hourCycle: "h24"
}));

















