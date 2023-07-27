// using array constructor
//creating an empty arr

const emparr = Array()
const emarr = [];

let number = [1,2,3,4,5,7,28,13] // array of numbers
const fruits = ['lemon', 'mango', 'apple' , 'banana'] // array of fruit objects

const person  = ['sandeep', 23 , 'jamshedpur',
{country: 'India', continent: 'Asia'},
{skills :['html','javascript','css','java']}]

console.log(person[4])
console.log(fruits[1])
console.log(fruits.length)

//creating static values with fill

const eightX =Array(8).fill('X')
const eightemp = Array(8)
console.log(eightemp)

//concatenating

const f1 = [1,2,3,4]
const f2 = [3,4,5,6]
const f3 = f1.concat(f2)
console.log(f3)

const num = [1,5,25,3,24,23 ,24, 9, 7 ,82, 0]

console.log(num.length)
console.log(num.indexOf(24))
console.log(num.lastIndexOf(24))
console.log(num.includes(23))
const strarr = num.toString()
console.log(strarr)

console.log(num.slice())
console.log(num.slice(0))
console.log(num.slice(1,4))
console.log(num.slice(1))
let num1 = num.slice(1,5)
console.log(num1)
console.log(num)

//splice method can change the original array

let newnum = [1,5,73,5,87 ,9]
console.log(newnum.splice())
console.log(newnum.splice(0,1)) // removes 1 index elment till base count 1
console.log(newnum.splice(2,2,4,4)) //removes 3 index elment till base count 2 and add 4
console.log(newnum)

//Push - it also change the exisiting array
 let num2 = [1,2,3,4,5]
 console.log(num2)
 num2.push(6)  //add in the last 
 console.log(num2)
num2.pop()  //remove from the last
console.log(num2)
num2.shift()  //remove from beginning 
console.log(num2)
num2.unshift(1)  //adds in the beginning
console.log(num2)
console.log(num2.reverse())
console.log(num2)
