/*
Passing Functions as arguments
 */

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

function isFullAge(el) {
    return el >= 18
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    }
    else {
        return -1
    }
}

let ages = arrayCalc(years, calculateAge)
console.log(ages)

let fullAges = arrayCalc(ages, isFullAge)
console.log(fullAges)

let heartRates = arrayCalc(ages, maxHeartRate)
console.log(heartRates)