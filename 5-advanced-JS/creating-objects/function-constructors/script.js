// Function constructor

/*
let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}
 */

let Person = function(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    /*
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth)
    }
     */
}

Person.prototype.lastName = 'Smith'

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}

let john = new Person('John', 1990, 'teacher')
let jane = new Person('Jane', 1969, 'designer')
let mark = new Person('Mark', 1948, 'retired')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)