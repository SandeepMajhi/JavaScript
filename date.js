const now = new Date();
console.log(now)

const year = now.getFullYear()
const date = now.getDate()
const month = now.getMonth() +1

const hour = now.getHours()
const minute = now.getMinutes()
const second = now.getSeconds()

console.log(`${year}/${month}/${date}  ${hour}:${minute} `)
console.log(now.getTime())
console.log(now.getDay())
