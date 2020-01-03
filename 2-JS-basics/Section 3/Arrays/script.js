/*
Arrays
 */

// Initialize  new array
let names = ['John', 'Mark', 'Jane']
let years = new Array(1990, 1969, 1948)

console.log(names[0])
console.log(names)
console.log(names.length)

// Mutate array data
names[1] = 'Ben'
console.log(names)

names[names.length] = 'Mary'
console.log(names)

// Different data types
let john = ['John', 'Smith', 1990, 'teacher', false]
console.log(john)

// Array methods
john.push('blue')
console.log(john)
john.unshift('Mr.')
console.log(john)
john.pop()
console.log(john)
john.pop()
console.log(john)
john.shift()
console.log(john)
console.log(john.indexOf(1990))

let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner)