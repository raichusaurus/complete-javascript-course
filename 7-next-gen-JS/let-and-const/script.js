// let and const

// ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5)

// ES6
const name6 = 'Jane Smith'
let age6 = 23
//name6 = 'Jane Miller'
console.log(name6)



// ES5
function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = 'John'
        var yearOfBirth = 1990
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
}

driversLicense(true)

// ES6
function driversLicense6(passedTest) {

    // console.log(firstName)
    let firstName
    const yearOfBirth = 1990

    if (passedTest) {
        firstName = 'John'
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
}

driversLicense6(true)

let i = 23
console.log(i)

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)