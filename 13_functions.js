/**
 function - functions is a package of statements which can be used at any point of programs by just calling the function using function name
 */

//  1 - > baic functions declaration


function myfunc(){
    console.log("hello javascript!")
}
myfunc()


function myfunc2(a,b){
    console.log(a+b)
}
myfunc2(10, 20)


function myfunc3(a,b){
    return a+b
}
let ans = myfunc3(1,2)
console.log(ans)

let myfunc4 = function(){
    console.log("from the function variable")
}
myfunc4()

let myfunc5 = function(user){
    return `${user} just logged in`
}
myfunc5("priyansh")//-> nothing will show in output
console.log(myfunc5("priyansh"))

let myfunc6 = function(user="JON SNOW"){
    return `${user} just logged in`
}
console.log(myfunc6("priyansh"))
console.log(myfunc6())



// rest operator -> to store multiple values in function in the form of array

console.log("----------------Rest Operator----------------");

// function items(...value){
//     return value
// }
// console.log(items(10,20,30,40,50,60))

function items2(val1,val2,...value){
    return value
}
console.log(items2("val1","val2",30,40,50,60))

// object inside a function

console.log("------------ object inside function -------------");

obj={
    name :"Priyansh",
    age : 22,
    gender : "Male",
    ph: 7705089638
}

function myobj(anyobj)
{
console.log(

`username is ${anyobj.name}
age is ${anyobj.age}
`);
}

myobj(obj)


// arrays inside function

console.log("-------------Array Inside Function------------");

let arr = [110,220,330,440,550]

function myarr(array){
    return array[3]
}

console.log(myarr(arr));

// scope in function
console.log("scopes in function");

if(true)
{
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);->this will gives error
// console.log(b);->this will gives error
console.log(c);//-> this will not give error because there is no scope in variable decalred using "var" keyword

// nested scope , closure -> in interview (used in DOM)
console.log("------------------nested loops------------------------");
function one() {
    let name = "priyansh"
    function two(){
        let age = 22
        console.log(`name is ${name} ,age is ${age}`);
    }
    two()
} 
one()

// interesting
console.log("------------------------interesting , hoisting---------------");

console.log(one(10));//->it will not give any error
function one(num){
    return num +1
}


// console.log(two(10)) // -> it will give an error definetly
let two = function (a)
{
    return a+1
}