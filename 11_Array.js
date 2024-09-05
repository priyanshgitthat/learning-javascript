//  Arrays In Javascript 
/* 
Arrray -> collection of multiple items , can be of different datatypes

arrays are resizable in javascript

shallow copy or deep copy

shallow copy -> share same reference of the object (pass by reference)

deep copy -> share copy referene of the object (pass by value)
*/

let arr = [34,56.78,true , 456]
console.log(arr);

// let arr2 = Array(1,2,3,4,5,)
// console.log(arr2, typeof arr2);
// console.log(arr2[2]);

// // array methods
// arr.push("Priyansh")
// console.log(arr);

// arr.unshift("firstValue")
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.includes(45));
// console.log(arr.indexOf(45));
// const narr = arr.join()
// console.log(narr , typeof narr);

/* 
slice ->  sirf indexing or slicing ke jaise kaam karta hai 

splice -> utni elements ko remove kr deta hai actual array se
*/

// arr  = Array(10,20,30,40,50)
// console.log("A->",arr)

// let a = arr.slice(0,3)
// console.log("B->",a);
// console.log(arr);

// let b = arr.splice(0,3)
// console.log("C->",b);
// console.log(arr);

// ------------------------------------------------------------------------------------------------

let arr1,arr2;

arr1 = Array(1,2,3,4,5)
console.log(`Arr1 -> ${arr1}`)
arr2 = Array(10,20,30,40,50)
console.log(`Arr2 -> ${arr2}`)
// arr1.push(arr2)
let arr3 = arr1.concat(arr2)
console.log(
    "arr1 -> "+arr1
    +"\narr2 -> "+arr2
    +"\narr3 -> "+arr3)

// spread opeators (...) -> used to caoncate more then two arrays at same time and store value in new variable 

let arr4 = [...arr1,...arr2]
console.log("arr4 -> "+arr4);


let arr5,arr6

arr5 = [10,20,30,["one","two","three"],40,50,[1.5,2.5,[1.250,2.250,3,350]]]
console.log(arr5);

arr6 = arr5.flat(Infinity)
console.log(arr6);


console.log(Array.isArray("Priyash"));

console.log(Array.from("Priyash"));

console.log(Array.from({
    name : "Priyansh",
    title :" verma"
})); //gives empty array if keys or values is not mentioned

console.log(Array.of(10,20,30,40));