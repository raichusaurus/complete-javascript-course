/*
Scoping and the Scope Chain
 */

let a = 'Hello!'
first()
function first() {
    let b = 'Hi!'
    second()

    function second() {
        let c = 'Hey!'
        // console.log(a + b + c)
        third()
    }
}

function third() {
    let d = 'John'
    // console.log(a + b + c + d)  // cannot access b or c
    console.log(a + d)
}