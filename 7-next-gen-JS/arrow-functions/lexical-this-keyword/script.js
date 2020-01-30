// Arrow Functions: Lexical 'this' Keyword

// ARROW FUNCTIONS DO NOT HAVE A THIS KEYWORD

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this // <================
        document.querySelector('.' + this.color).addEventListener('click', function() {
            var str = 'This box number ' + self.position + ' and it is ' + self.color
            alert(str)
        })
    }
}

box5.clickMe()



// ES6

let box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector(`.${this.color}`).addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${this.color}`
            alert(str)
        })
    }
}

box6.clickMe()

/*
let box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector(`.${this.color}`).addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${this.color}`
            alert(str)
        })
    }
}

box66.clickMe()

 */

function Person(name) {
    this.name = name
}

var friends = ['Bob', 'Jane', 'Mark']
// ES5
Person.prototype.myFriends5 = function(friendsArray) {
    var arr = friendsArray.map(function(el) {
        return this.name + ' is friends with ' + el
    }.bind(this))

    console.log(arr)
}

new Person('John').myFriends5(friends)

// ES6
Person.prototype.myFriends6 = function(friendsArray) {
    let arr = friendsArray.map((friend) => `${this.name} is friends with ${friend}`)
    console.log(arr)
}

new Person('Mike').myFriends6(friends)