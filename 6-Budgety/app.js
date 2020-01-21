
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
            allExpenses: [],
            allIncomes: []
        },
        totals: {
            totalExpenses: 0,
            totalIncome: 0
        }
    }

})()

// UI CONTROLLER
let UIController = (function() {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
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

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    return {
        init: function() {
            console.log('Application has started.')
            setupEventListeners()
        }
    }
})(budgetController, UIController)

controller.init()