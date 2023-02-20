// step-1:add event handler
document.getElementById('btn-deposit').addEventListener('click', function(){
// step-2:get the deposit amount from the deposit field
// for input field use .value to the value inside the input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

// console.log(depositAmount);
// step:3-get the current deposit total
// for non-input (element other than input ,textarea) use innerText to get the text
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal= parseFloat(previousDepositTotalString);
// step-4:add numbers to set the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;
// step-5:grt balance current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString= balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step-6:
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance element
balanceTotalElement.innerText= currentBalanceTotal;


// step-7:clear the deposit field
depositField.value = '';
})