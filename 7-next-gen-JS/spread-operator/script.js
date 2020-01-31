// Spread Operator

function addFourAges(a, b, c, d) {
    return a + b + c + d
}

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1)



var ages = [18, 30, 12, 21]

// ES5

var sum5 = addFourAges.apply(null, ages)
console.log(sum5)

// ES6
const sum6 = addFourAges(...ages)
console.log(sum6)

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familySmith, 'Lily', ...familyMiller] // whoa
console.log(bigFamily)

const h = document.querySelector('h1')
const boxes = document.querySelectorAll('.box')
const all = [h, ...boxes]

Array.from(all).forEach(current => current.style.color = 'purple')