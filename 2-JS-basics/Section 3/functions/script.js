/*************************
 Functions
 */

function calculateAge(birthYear) {
    return 2020 - birthYear
}

function yearsUntilRetirement(firstName, year) {
    let age = calculateAge(year)
    let retirement = 65 - age
    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years.")
    }
    else {
        console.log(firstName + " is already retired.")
    }
}

johnBirthYear = 1986
mikeBirthYear = 1948
janeBirthYear = 1969

console.log("John's birth year is " + johnBirthYear)
console.log("Mike's birth year is " + mikeBirthYear)
console.log("Jane's birth year is " + janeBirthYear)

let johnAge = calculateAge(johnBirthYear)
let mikeAge = calculateAge(mikeBirthYear)
let janeAge = calculateAge(janeBirthYear)

console.log("John is " + johnAge + " years old")
console.log("Mike is " + mikeAge + " years old")
console.log("Jane is " + janeAge + " years old")

yearsUntilRetirement("John", janeBirthYear)
yearsUntilRetirement("Mike", mikeBirthYear)
yearsUntilRetirement("Jane", janeBirthYear)
