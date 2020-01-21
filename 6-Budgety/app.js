
// BUDGET CONTROLLER
let budgetController = (function() {

    // Some code

})()

// UI CONTROLLER
let UIController = (function() {

    // Some code

})()

// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {

        if (event.code === "Enter") {
            console.log('you hit enter')
            ctrlAddItem()
        }
    })

})(budgetController, UIController)