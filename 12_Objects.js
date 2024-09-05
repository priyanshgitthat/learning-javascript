/*
Objects In Javascript -
two ways to declare objects 
1.literal
2.constructor 

// singleton when object is made by constructor
*/
// this is constructor way
// Object.create()



let mysym = Symbol("key1")
// this is literal way
let user = {
    name:"Priyansh",
    age:22,
    gender:"Male",
    [mysym]:"MeySymbol"
}
// console.log(user)
// console.log(user.name)
// console.log(user["name","age"])
// console.log(user[mysym],typeof mysym);

// user.age = 23
// console.log(user);

// Object.freeze(user) // to stop changing values from array
// user.age=34 
// console.log(user);

user.greet = function()
{
    console.log("Hello User");
    console.log(`hello,${this.name},your age is ${this.age}`);

}

// console.log(user.greet());
// console.log(user.greet);


//  ------------------------------------------------------------------------------------------------------

let obj = new Object()

obj.name="jon snow"
obj.age=28
obj.work="swodsman"

// console.log(obj);

obj = {
    id:1,
    name:{
        firstname:"priyansh",
        lastname:"verma"
    },
    gender:"Male"
}

// console.log(obj);
// console.log(obj.name);
// console.log(obj.name.firstname);

let obj2
obj ={
    1:"a",
    2:"b",
    3:"c"
}
obj2 ={
    10:"A",
    20:"B",
    30:"C"
}

// let obj3 = Object.assign(obj, obj2)

let obj3 = {...obj, ...obj2}
// console.log(obj3);

// console.log("Keys ->"+Object.keys(obj),"\nValues ->"+Object.values(obj));
// console.log(obj.hasOwnProperty("1"));


// ---------------------------------------------------------------------------------------------------

// de - structure

let js = {
    name:"javascript",
    price:2000,
    duration:4
}

let {name,price,duration} = js
console.log(name,price,duration)

