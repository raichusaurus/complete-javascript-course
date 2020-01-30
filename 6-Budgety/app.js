
// BUDGET CONTROLLER
let budgetController = (function() {

    let Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
        this.percentage = -1
    }

    Expense.prototype.calculatePercentage = function(totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome * 100))
        }
        else {
            this.percentage = -1
        }
    }

    Expense.prototype.getPercentage = function() {
        return this.percentage
    }

    let Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let calculateTotal = function(type) {
        let sum = 0
        data.allItems[type].forEach(function(current) {
            sum += current.value
        })

        data.totals[type] = sum
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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

        deleteItem: function(type, id) {
            let ids, index

            ids = data.allItems[type].map(function(current) {
                return current.id
            })

            index = ids.indexOf(id)

            if (index !== -1) {
                data.allItems[type].splice(index, 1)
            }
        },

        calculateBudget: function() {

            // calculate total income and expenses
            calculateTotal('exp')
            calculateTotal('inc')

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            }
            else {
                data.percentage = -1
            }
        },

        calculatePercentages: function() {

            data.allItems.exp.forEach(function(current) {
                current.calculatePercentage(data.totals.inc)
            })
        },

        getPercentages: function() {
            return data.allItems.exp.map(function(current) {
                return current.getPercentage()
            })
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    }

    let formatNumber = function(number, type) {

        // + or - before number
        // exactly two decimal points
        // comma separating thousands

        number = Math.abs(number)
        number = number.toFixed(2)

        let numberSplit = number.split('.')
        let int = numberSplit[0]
        let dec = numberSplit[1]
        if (int.length > 3) {
            int = int.substring(0, int.length - 3) + ',' + int.substring(int.length - 3, int.length)
        }

        let sign
        type === 'exp' ? sign = '-' : sign = '+'

        return sign + ' ' + int + '.' + dec
    }

    let nodeListForEach = function (nodeList, callback) {
        for (let i = 0; i < nodeList.length; i++) {
            callback(nodeList[i], i)
        }
    }

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function(newItem, type) {

            // Create HTML string with placeholder text

            let html, newHTML, element

            if (type === 'inc') {
                element = DOMStrings.incomeContainer
                html = '<div class="item clearfix" id="inc-%id%">' +
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
                html = '<div class="item clearfix" id="exp-%id%">' +
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
            newHTML = newHTML.replace('%value%', formatNumber(newItem.value, type))

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)
        },

        deleteListItem: function(selectorID) {

            let element = document.getElementById(selectorID)

            element.parentNode.removeChild(element)
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

        displayBudget: function(budget) {

            let type
            budget.budget > 0 ? type = 'inc' : type = 'exp'

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(budget.budget, type)
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(budget.totalInc, 'inc')
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(budget.totalExp, 'exp')
            if (budget.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = budget.percentage + '%'
            }
            else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---'
            }
        },

        displayPercentages: function(percentages) {
            let fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel)

            nodeListForEach(fields, function(current, index) {

                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%'
                }
                else {
                    current.textContent = '---'
                }
            })

        },

        displayMonth: function() {
            let now, months, year

            now = new Date()
            // let christmas = new Date(2020, 12, 25)

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December']
            month = now.getMonth()

            year = now.getFullYear()
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year
        },

        changedType: function() {

            let fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue)

            nodeListForEach(fields, function(current) {
                current.classList.toggle('red-focus')
            })

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red')
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

        document.querySelector(DOMStrings.container).addEventListener('click', ctrlDeleteItem)

        document.querySelector(DOMStrings.inputType).addEventListener('change', UICtrl.changedType)
    }

    let updateBudget = function() {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget()

        // 2. Return the budget
        let budget = budgetCtrl.getBudget()

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget)
    }

    let updatePercentages = function() {

        // 1. Calculate the percentages
        budgetCtrl.calculatePercentages()

        // 2. Read them from budget controller
        let percentages = budgetCtrl.getPercentages()

        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages)
    }

    let ctrlAddItem = function() {

        // 1. Get the field input data
        let input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value !== 0) {

            // 2. Add the item to the budget controller
            let newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. Clear the fields
            UICtrl.clearFields()

            // 5. Calculate and update budget
            updateBudget()

            // 6. Calculate and update percentages
            updatePercentages()
        }
    }

    let ctrlDeleteItem = function(event) {
        let itemID, splitID, type, ID

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

        if (itemID) {
            splitID = itemID.split('-')
            type = splitID[0]
            ID = parseInt(splitID[1])
        }

        // 1. delete the item from the data structure
        budgetCtrl.deleteItem(type, ID)

        // 2. delete the item from the UI
        UICtrl.deleteListItem(itemID)

        // 3. Update and show the new budget
        updateBudget()

        // 4. Calculate and update percentages
        updatePercentages()
    }

    return {
        init: function() {
            console.log('Application has started.')
            UICtrl.displayMonth()
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            })
            setupEventListeners()
        }
    }
})(budgetController, UIController)

controller.init()