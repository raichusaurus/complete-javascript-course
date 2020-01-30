// Blocks and IIFEs


// ES6
{
    const a = 1
    let b = 2

    console.log(a + b)
    var c = 3
    console.log(c)
}

console.log(c);
//console.log(a + b)

// ES5

(function() {
    var c = 3
})()

console.log(c)