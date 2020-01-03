/*
operator precedence
 */

let now = 2020
let yearJohn = 1986
let fullAge = 18

let isFullAge = now - yearJohn >= fullAge
console.log(isFullAge)

let ageJohn = now - yearJohn
let ageMark = 35
let average = (ageJohn + ageMark) / 2
console.log(average)

// multiple assignments

let x, y
x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y)

// more operators

x *= 2
console.log(x)
x += 10
console.log(x)
x++
console.log(x)