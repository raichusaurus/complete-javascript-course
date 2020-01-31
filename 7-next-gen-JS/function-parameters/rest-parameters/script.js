// Rest Parameters

// ES5
function isFullAge5(limit) {
    var argsArray = Array.prototype.slice.call(arguments, 1)

    argsArray.forEach(function(current) {
        console.log((2020 - current) >= limit)
    })
}

//isFullAge5(21, 1990, 1999, 1965)
//isFullAge5(21, 1990, 1999, 1965, 2016, 1987)

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(current => console.log((2016 - current) >= 18))
}

isFullAge6(21, 1990, 1999, 1965)
isFullAge6(21, 1990, 1999, 1965, 2016, 1987)