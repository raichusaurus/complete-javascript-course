/*
if / else statements
 */

let firstName = 'John'
let civilStatus = 'single'

let isMarried = civilStatus === 'married'

if (isMarried) {
    console.log(firstName + ' is married!')
}
else {
    console.log(firstName + ' is not married!')
}

//enhance coding challenge 1

let johnMass = 92
let johnHeight = 1.95
let markMass = 1.69
let markHeight = 78

let johnBMI = johnMass / (johnHeight * johnHeight)
let markBMI = markMass / (markHeight * markHeight)

let markHigherBMI = markBMI > johnBMI

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's")
}
else {
    console.log("John's BMI is higher than Mark's")
}