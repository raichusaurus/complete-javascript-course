function Question(question, choices, answer) {
    this.question = question
    this.choices = choices
    this.answer = answer
}

Question.prototype.askQuestion = function() {
    console.log(this.question)
    for (let i = 0; i < this.choices.length; i++) {
        console.log(i + ': ' + this.choices[i])
    }
}

Question.prototype.checkAnswer = function(response, callback) {

    let sc

    if (this.answer == response) {
        console.log("Correct!")
        sc = callback(true)
    }
    else {
        console.log("WRONG")
        sc = callback(false)
    }

    displayScore(sc)
}

let dogQuestion = new Question(
    "What is my dog's name?",
    ["Bran", "Arya", "Jon"],
    0)

let catQuestion = new Question(
    "What is my cat's name",
    ["Buffy", "Anya", "Spike"],
    1
)

let questions = [dogQuestion, catQuestion]

function score() {
    let sc = 0
    return function(correct) {
        if (correct) {
            sc++
        }

        return sc
    }
}

function displayScore(score) {
    console.log('Your current score is: ' + score)
}

let keepScore = score()

function nextQuestion() {
    let askedQuestion = questions[Math.floor(Math.random() * questions.length)]
    askedQuestion.askQuestion()

    let response = prompt("Please select the correct answer (just type the number)")

    if (response !== 'exit') {
        askedQuestion.checkAnswer(response, keepScore)
        nextQuestion()
    }
}

nextQuestion()