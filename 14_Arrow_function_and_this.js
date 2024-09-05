let obj = {
    name:"priyansh",
    age:22,

    wlcm:function(){
        console.log(`username is ${this.name},
            age is ${this.age}`)
    }

}

// this context only applicable for object not any other variables

// obj.wlcm()
// obj.name="JON SNOW"
// obj.wlcm()

console.log(this);//->gives empty {}

// Arrow functions
console.log("----------------------------ARROW Functions-----------------------------");

let func = function()
{
    let name = "priyansh"
    console.log(this.name);//->gives undefined 
}
func()

let func2 = () =>
{
    let name = "priyansh"
    console.log(this.name);//->gives undefined 
}
func2()

//basic arrow function
let addTwo = (a,b) =>{
    return a+b
}
console.log(addTwo(10,20));

//implicit return
let addTwo2 = (a,b) =>( a+b)//->doesn't need to  use "return" keyword
console.log(addTwo2(20,20));

let addTwo3 = (a,b) =>({name:"priyansh"}) //->need to use parenthesis"()" when working with objets
console.log(addTwo3());

let myarr = [10,20,30,40,50]

// IIFE in function (immediately invoke function expression)

console.log("----------------------IIFE---------------------");

(function code()
{
    // ->this is named iife
    console.log("this is a function");
})();

(
    () =>{
        // -> this is unnamed iifee
        console.log("this is arraw IIFE");
    }
)();

(
    (name)=>{
        console.log(`username is ${name}`);
    }
)("priyansh");


    let wixh = ((n) => {
        // -> names iife using arrow function
        console.log(`name is ${n}`)
    }
)("JON SNOW");