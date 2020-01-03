/*
Variable mutation and type coercion
 */

let firstName = 'John'
let age = 28

// type coercion
console.log(firstName + ' ' + age)

let job, isMarried
job = 'teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// variable mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

let lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName)