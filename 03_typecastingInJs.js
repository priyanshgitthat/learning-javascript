// 1. into number:

let str = "33"
let check = Number(str)
console.log("33 into number => ",check,typeof check)

str = "33cbsc"
check = Number(str)
console.log('33cbsc into number =>',check,typeof check) // => gives NaN value , type is Number

let bool = true;
check = Number(bool)
console.log("true into number =>",check,typeof check)
bool = false;
check = Number(bool)
console.log("false into number =>",check,typeof check)

let unf = undefined
check - Number(unf)
console.log("undefined into number =>",check , typeof check)

let nul = null
check - Number(nul)
console.log("null into number =>",check , typeof check)

let Na = NaN
check - Number(Na)
console.log("NaN into number =>",check , typeof check)


// 2 into string :

let num = 7865
str = String(num)
console.log("7865 into String =>",str,typeof str)

bool = true
str = String(bool)
console.log("true into String =>",str ,typeof str)

unf = undefined;
str = String(unf)
console.log("undefined into string =>",str,typeof str)

nul = null;
str = String(nul)
console.log("null into string =>",str,typeof str)

Na = NaN;
str = String(Na)
console.log("NaN into string =>",str,typeof str)

// 3. into boolean:

num = 67.79
bool = Boolean(num)
console.log(num,"into bool",bool,typeof bool)

str = 'priyansh'
bool = Boolean(str)
console.log(str,"into bool",bool,typeof bool)

unf = undefined
bool = Boolean(unf)
console.log(unf,"into bool",bool,typeof bool)

nul = null
bool = Boolean(nul)
console.log(nul,"into bool",bool,typeof bool)

Na = NaN
bool = Boolean(Na)
console.log(Na,"into bool",bool,typeof bool)

