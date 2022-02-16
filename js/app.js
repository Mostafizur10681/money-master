document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income');
    const incomeInputValue = parseFloat(incomeInput.value);
    // console.log(incomeInputValue);
    const foodInput = document.getElementById('food');
    const foodInputValue = parseFloat(foodInput.value);
    // console.log(foodInputValue)
    const rentInput = document.getElementById('rent');
    const rentInputValue = parseFloat(rentInput.value);
    // console.log(rentInputValue)
    const clothesInput = document.getElementById('clothes');
    const clothesInputValue = parseFloat(clothesInput.value);
    // console.log(clothesInputValue);

    // Add food , rent and clothes cost value;
    const expensesTotal = document.getElementById('expenses-total');
    const expensesValue = expensesTotal.innerText;
    expensesTotal.innerText = foodInputValue + rentInputValue + clothesInputValue;

})