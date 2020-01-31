// Default Parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName
    nationality === undefined ? nationality = 'American' : nationality = nationality

    this.lastName = lastName
    this.firstName = firstName
    this.yearOfBirth = yearOfBirth
    this.nationality = nationality
}

var john = new SmithPerson('John', 1990)
console.log(john)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')
console.log(emily)
*/

// ES 6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.lastName = lastName
    this.firstName = firstName
    this.yearOfBirth = yearOfBirth
    this.nationality = nationality
}

var john = new SmithPerson('John', 1990)
console.log(john)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')
console.log(emily)