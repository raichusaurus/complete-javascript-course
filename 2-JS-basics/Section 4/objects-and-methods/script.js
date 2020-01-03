/*
Objects and methods
 */

let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear
    }
}

john.calcAge()
console.log(john)