//this is way to write single line comments

// Primitive dataypes in Javascript includes
//     Number,
//     Strings,
//     boolean,
//     undefined,
//     Null

// Primitive datatypes are immutable onces they created we cannot modify.

//Non Primitives datatypes are modifiable and mutable.We can modify the 
// value.
//       Array
//       Object

let Name = 'Sandeep'
let Surname = 'Majhi'
let age = 23
let job

console.log(`the name of the guys is ${Name}  ${Surname}`)
console.log(Name, Surname)
console.log('this is another way to concatenate'+ Name + ' ' + Surname)


console.log(Name , typeof Name)
console.log(age , typeof age)
console.log(typeof true)
console.log(typeof job)
console.log(typeof NaN)
console.log(typeof null)

let num = '10'
let numInt = parseInt(num)
console.log(numInt)

let numnum = Number(num)
console.log(numnum)

let numsum = +num 
console.log(numsum)

console.log(1 + '1')
console.log(1 + +'1')