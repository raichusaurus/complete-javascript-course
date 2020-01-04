/*
Loops and Iteration
 */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// i = 0, 0 < 10 (true), log i to console, i++
// i = 1, 1 < 10 (true), log i to console, i++
// ...
// i = 9, 9 < 10 (true), log i to console, i++
// i = 10, 10 < 10 (false), exit loop

let john = ['John', 'Smith', 1990, 'designer', false, 'blue']

// for loop
for (let i = 0; i < john.length; i++) {
    console.log(john[i])
}

// while loop
let i = 0
while (i < john.length) {
    console.log(john[i])
    i++
}

// continue and break statements
for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i])
}

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i])
}


// looping backwards
for (let i = john.length - 1; i > -1; i--) {
    console.log(john[i])
}