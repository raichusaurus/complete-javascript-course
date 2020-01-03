/*
Coding Challenge 2
 */

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// GOOD LUCK

let johnTeamGame1 = 89
let johnTeamGame2 = 120
let johnTeamGame3 = 103

let mikeTeamGame1 = 116
let mikeTeamGame2 = 94
let mikeTeamGame3 = 123

let maryTeamGame1 = 97
let maryTeamGame2 = 134
let maryTeamGame3 = 105

let johnTeamAverage = (johnTeamGame1 + johnTeamGame2 + johnTeamGame3) / 3
let mikeTeamAverage = (mikeTeamGame1 + mikeTeamGame2 + mikeTeamGame3) / 3
let maryTeamAverage = (maryTeamGame1 + maryTeamGame2 + maryTeamGame3) / 3

console.log("John's team average: " + johnTeamAverage)
console.log("Mike's team average: " + mikeTeamAverage)

switch (true) {
    case johnTeamAverage > mikeTeamAverage:
        console.log("John's team would beat Mike's team")
        break
    case mikeTeamAverage > johnTeamAverage:
        console.log("Mike's team would beat John's team")
        break
    default:
        console.log("Mike and John's teams would tie")
}

if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log("John's team is the best")
}
else if (mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
    console.log("Mike's team is the best")
}
else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
    console.log("Mary's team is the best")
}
else {
    console.log("There is a tie")
}