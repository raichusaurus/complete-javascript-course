/*
The 'this' Keyword in Practice
 */

// console.log(this)

calculateAge(1985)

function calculateAge(year) {
    console.log(2020 - year)
    console.log(this)
}

let john = {
    name: 'John',
    birthYear: 1990,
    calculateAge: function() {
        console.log(this)
        console.log(2020 - this.birthYear)

        function innerFunction() {
            console.log(this)
        }
        innerFunction()
    }
}

john.calculateAge()

let mike = {
    name: "Mike",
    birthYear: 1984
}

mike.calculateAge = john.calculateAge
mike.calculateAge()