// ES6 Strings

let firstName = 'John'
let lastName = 'Smith'

const yearOfBirth = 1990

function calculateAge(year) {
    return 2020 - year
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + ', they were born in ' + yearOfBirth)

// ES6
console.log(`This is ${firstName} ${lastName} , they are ${calculateAge(yearOfBirth)} years old.`)

const fullName = `${firstName} ${lastName}`

console.log(fullName.startsWith('J'))
console.log(fullName.endsWith('th'))
console.log(fullName.includes(' '))
console.log(`${firstName} `.repeat(5))