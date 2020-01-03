/*
Function Statements and Expressions
 */

// Function declaration
//function whatDoYouDo(job, FirstName){}

// Function expression
let whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.'
        case 'driver':
            return firstName + ' drives an uber in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.'
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))