
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
     const balanceTotal = document.getElementById('balance-total')
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance()

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');
     
    if(depositAmount > 0){
          //get current deposit 
        updateTotalField('deposit-total', depositAmount);

        // update balance 
        updateBalance(depositAmount, true);
    }

});


// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input');
    const currenBalance = getCurrentBalance();

    if(withdrawAmount > 0 && withdrawAmount < currenBalance){
        // update withdraw total 
        updateTotalField('withdraw-total', withdrawAmount);

        // update balance after withdraw
        updateBalance(withdrawAmount, false);
    }

   
});