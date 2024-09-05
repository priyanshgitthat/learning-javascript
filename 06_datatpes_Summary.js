// datatypes 
// 1 Primitive
// 2 Non Primitive

// "javascript is a dynamically typed language"

/* Primitive
    String
    Number
    Boolean
    Null
    Undefined
    Symbol
    BigInt 
*/

let id = Symbol('123')
let id2 = Symbol('123')
console.log(id,id2)

/* Non Primitive (Reference)
    Array
    Objects
    Functions
*/


let arr = ["ironman","superman","spiderman",45,45.45,true,null]
console.log("array=",arr)
console.log("array Type = ",typeof arr)

let myobj = {
    name:"Priyansh",
    age:23
}
console.log("object = ",myobj)
console.log("object Type = ",typeof myobj)

let myfunc = function(){
    console.log("Hello World");
}
myfunc() //hello world
console.log("function Type = ",typeof myfunc)
console.log(myfunc) //[Function: myfunc]

/*  array ka type -> object
    object ka type -> object
    function ka tyoe -> function object 
*/