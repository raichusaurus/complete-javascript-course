/*
   Object.create
 */

let personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth)
    }
}

let john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

let jane = Object.create(personProto,
    {
        name: {value: 'John'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    })