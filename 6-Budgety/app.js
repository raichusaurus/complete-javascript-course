
// BUDGET CONTROLLER
let budgetController = (function() {

    let Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, description, value) {

            let newItem, ID

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            }
            else {
                ID = 0
            }
            // Create new element based on type
            if (type === 'exp') {
                newItem = new Expense(ID, description, value)
            }
            else if (type === 'inc') {
                newItem = new Income(ID, description, value)
            }
            // Push it into our data structure
            data.allItems[type].push(newItem)

            // Return new element
            return newItem
        },
        testing: function() {
            console.log(data)
        }
    }

})()

// UI CONTROLLER
let UIController = (function() {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
        },
        addListItem: function(newItem, type) {

            // Create HTML string with placeholder text

            let html, newHTML, element

            if (type === 'inc') {
                element = DOMStrings.incomeContainer
                html = '<div class="item clearfix" id="income-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
            }
            else if (type === 'exp') {
                element = DOMStrings.expenseContainer
                html = '<div class="item clearfix" id="expense-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
            }

            // Replace the placeholder text with some actual data
            newHTML = html.replace('%id%', newItem.id)
            newHTML = newHTML.replace('%description%', newItem.description)
            newHTML = newHTML.replace('%value%', newItem.value)

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)
        },

        clearFields: function() {

            let fields, fieldsArr
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)
            fieldsArr.forEach(function(current, index, array) {
                current.value = ""
            })

            fieldsArr[0].focus()
        },

        getDOMStrings: function() {
            return DOMStrings
        }
    }

})()

// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let setupEventListeners = function() {

        let DOMStrings = UICtrl.getDOMStrings()

        document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.code === "Enter") {
                ctrlAddItem()
            }
        })
    }

    let ctrlAddItem = function() {

        // 1. Get the field input data
        let input = UICtrl.getInput()

        // 2. Add the item to the budget controller
        let newItem = budgetCtrl.addItem(input.type, input.description, input.value)

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type)

        // 4. Clear the fields
        UICtrl.clearFields()

        // 5. Calculate the budget

        // 6. Display the budget on the UI
    }

    return {
        init: function() {
            console.log('Application has started.')
            setupEventListeners()
        }
    }
})(budgetController, UIController)

controller.init()