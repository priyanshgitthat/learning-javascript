// memory 
// stack used for (primitive) , heap used for (non primitive)

let a = 45
let b = a
console.log("a and b = ",a,b)
b="newvalue"
console.log("a and b = ",a,b)

let obj = {
    name:"priyansh",
    age:20,
}
console.log(obj.name) 
let obj2 = obj
obj2.name = "Jon Snow"
console.log(obj2.name)
console.log(obj.name)

/* heap refrence to the original memory spaces, changes reflects direclty 


while stck gives copy of the memory or data value*/