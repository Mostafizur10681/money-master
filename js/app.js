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

    const expenses = document.getElementById('expenses-total');
    const expensesValue = expenses.innerText;
    const expensesTotal = foodInput + rentInput + clothesInput;
    expenses.innerText = expensesTotal;
    const balance = document.getElementById('balance-total');
    const balanceValue = balance.innerText;
    const balanceTotal = incomeInput - expensesTotal;
    balance.innerText = balanceTotal;

})

document.getElementById('save-button').addEventListener('click', function () {

    const incomeInput = getInputValue('income');
    const savingInput = document.getElementById('saving-input');
    const savingInputValue = parseFloat(savingInput.value)
    const saveParcentage = savingInputValue / 100;
    const newSavingAmount = incomeInput * saveParcentage;


    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = newSavingAmount;

    const remaining = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance-total').innerText;
    const remainingAmount = balance - newSavingAmount;
    remaining.innerText = remainingAmount


})