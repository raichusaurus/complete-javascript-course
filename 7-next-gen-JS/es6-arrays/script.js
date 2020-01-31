// Arrays

const boxes = document.querySelectorAll('.box')

// ES5
var boxesArray5 = Array.prototype.slice.call(boxes)
/*
boxesArray5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue'
})
*/

// ES6
const boxesArray6 = Array.from(boxes)
boxesArray6.forEach(current => current.style.backgroundColor = 'dodgerblue')




// ES5
/*
for (var i = 0; i < boxesArray5.length; i++) {
    if (boxesArray5[i].className === 'box blue') {
        continue
    }

    boxesArray5[i].textContent = 'I changed to blue!'
}

 */

// ES6
for (const current of boxesArray6) {
    if (current.className.includes('blue')) {
        continue
    }
    current.textContent = 'I changed to blue!'
}



// ES 5
var ages = [12, 17, 8, 21, 14, 11]
var fullAge = ages.map(function(current) {
    return current >= 18
})
console.log(fullAge)
console.log(fullAge.indexOf(true))
console.log(ages[fullAge.indexOf(true)])

// ES6
console.log(ages.findIndex(current => current >= 18))
console.log(ages.find(current => current >= 18))