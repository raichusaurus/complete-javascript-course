/*
Hoisting in Practice
 */

calculateAge(1965)
// retirement(1956) (does not work since function expression is not hoisted)

function calculateAge(year) {
    console.log(2020 - year)
}

let retirement = function(year) {
    console.log(65 - (2020 - year))
}

// variables

// console.log(age) age not yet initialized

let age = 23;
console.log(age)

function foo() {
    // console.log(age) age not yet initialized
    let age = 65
    console.log(age)
}

foo()
console.log(age)