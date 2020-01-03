/*
Coding Challenge 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

 GOOD LUCK
 */

let johnMass = 92
let johnHeight = 1.95
let markMass = 1.69
let markHeight = 78

let john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}

let mark = {
    name: 'Mark',
    mass: 1.69,
    height: 78,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}

function compareBMI(one, two) {
    let winner;
    if (one.calcBMI() > two.calcBMI()) {
        winner = one
    }
    else if (two.BMI > one.BMI) {
        winner = two
    }
    else {
        console.log("They have the same BMI.")
        return
    }
    console.log(winner.name + " has the highest BMI")
    console.log(winner)
}

compareBMI(john, mark)