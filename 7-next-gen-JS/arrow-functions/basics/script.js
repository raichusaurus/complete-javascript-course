// Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(year) {
    return 2020 - year
})

console.log(ages5)

// ES6
let ages6 = years.map(year => 2020 - year)
console.log(ages6)

ages6 = years.map((year, index) => `Age of element ${index + 1}: ${2020 - year}`)
console.log(ages6)

ages6 = years.map((year, index) => {
    const now = new Date().getFullYear()
    const age = now - year
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6)