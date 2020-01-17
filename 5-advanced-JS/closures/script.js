/*
Closures
 */

function retirement(retirementAge) {
    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth
        console.log((retirementAge - age) + ' years left until retirement.')
    }
}

let retirementUS = retirement(66)
let retirementGermany = retirement(65)
let retirementIceland = retirement(67)

retirementUS(1990)
retirementGermany(1990)
retirementIceland(1990)

retirement(66)(1990)

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is')
        }
        else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?')
        }
        else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

interviewQuestion('teacher')('John')