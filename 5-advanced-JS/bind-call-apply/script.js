/*
Bind, call, and apply
 */

let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' +
                this.name + '. I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.')
        }
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + '. I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.')
        }
    }
}

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon')
john.presentation.apply(emily, ['friendly', 'afternoon'])

john.presentation('formal', 'morning')

let johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('morning')
johnFriendly('night')

let emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal('afternoon')

let years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calculateAge(el) {
    return 2020 - el
}

function isFullAge(limit, el) {
    return el >= limit
}

let ages = arrayCalc(years, calculateAge)
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)