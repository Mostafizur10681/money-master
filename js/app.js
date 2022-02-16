// Get Input Value
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    return inputValue;
    input.value = '';

}


document.getElementById('calculate-button').addEventListener('click', function () {

    const incomeInput = getInputValue('income');
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');

    if (incomeInput < 0 || isNaN(incomeInput) || incomeInput == null) {
        alert('Please Enter a positive Intiger number')

    }
    else if (foodInput < 0 || isNaN(foodInput) || foodInput == null) {
        alert('Please Enter a Positive Intiger value of food')
    }
    else if (rentInput < 0 || isNaN(rentInput) || rentInput == null) {
        alert('Please Enter a Positive Intiger value of rent')
    }
    else if (clothesInput < 0 || isNaN(clothesInput) || clothesInput == null) {
        alert('Please Enter a Positive Intiger value of clothes')
    }
    else {
        const expenses = document.getElementById('expenses-total');
        const expensesValue = expenses.innerText;
        const expensesTotal = foodInput + rentInput + clothesInput;
        expenses.innerText = expensesTotal;
        const balance = document.getElementById('balance-total');
        const balanceValue = balance.innerText;
        const balanceTotal = incomeInput - expensesTotal;
        balance.innerText = balanceTotal;
    }



})

document.getElementById('save-button').addEventListener('click', function () {

    const incomeInput = getInputValue('income');
    const savingInputValue = getInputValue('saving-input')
    if (incomeInput < 0 || isNaN(incomeInput) || incomeInput == null) {
        alert('Please Enter a positive Intiger number')
    }
    else {

        const saveParcentage = savingInputValue / 100;
        const newSavingAmount = incomeInput * saveParcentage;
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = newSavingAmount;

        const remaining = document.getElementById('remaining-balance');
        const balance = document.getElementById('balance-total').innerText;
        const remainingAmount = balance - newSavingAmount;
        remaining.innerText = remainingAmount;
    }


})