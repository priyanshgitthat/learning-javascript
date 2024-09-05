"use strict"; // treat all js code according to newer version of js

// 1. Primitive Datatypes
// number       -> all integer and float
// bigint       -> larger than 2 to the power of 53 
// string       -> ""
// boolean      -> true/false
// null         -> stand alone value
// undefined    ->
// symbol       -> unique

// type of undefined    -> undefined
//  type of null        -> object
// js says that null == undefines -> true

// a. number type:

//  " to represent both integer and floating point numbers"

let num1 = 69
let num2 = 69.69
console.log(num1,num2); // 69 69.69
console.log(typeof(num1),typeof(num2)); // number number

// b. NaN -> not a number 
console.log("priyansh"/34); //-> Nan
console.log(NaN == NaN); // -> false

// "any operation with NaN gives NaN , and NaN is not equal to NaN"

// c. string :
// "strings are immutable in js, once created never modified"

let str = "javascipt"
console.log(str)
// str[0]="J" // ->error , can not assign 
// console.log(str) // not execute

// d. boolean type:

let t = true
let f = false
console.log(t,f);

// e. undefined type:
// "when variable is declared , but not assigned"

let n1 , n2="value assign kar di gayi hai";
console.log(n1,n2);
console.log(typeof (n1),typeof(n2));

// f. null type 
// " has only one value "null"

let a = null;
console.log(a,"type of a is = ",typeof (a));

