/*
Truthy and Falsy values and equality values
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

let height

height = 23

if (height || height === 0) {
    console.log('variable is defined')
}
else {
    console.log('variable has NOT been defined.')
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion')
}
if (!(height === '23')) {
    console.log('The === operator does not do type coercion')
}