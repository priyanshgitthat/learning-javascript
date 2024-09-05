/* Date And Time in Js */
// date

let mydt = new Date()
// console.log(typeof mydt);
// console.log(mydt);
// console.log(mydt.toString());
// console.log(mydt.toISOString());
// console.log(mydt.toDateString());
// console.log(`datestring = ${mydt.toDateString()}`);


// let newdt = new Date(2024 , 7 ,20)
// console.log(newdt.toDateString());

// let dt = new Date("08-20-2024")
// console.log(dt.toLocaleString());

/*To make timestamp
*/
let newdt = new Date(2024 , 7 ,20)
let start = Date.now()
console.log(start);
console.log(newdt.getTime());
console.log(Math.floor(Date.now()/1000));

let date = new Date()
console.log("date = ",date);
console.log("Day = ", date.getDay());
console.log("Month = ", date.getMonth());
console.log("Year = ", date.getFullYear());
