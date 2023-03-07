/* 
    01. add withdraw button event handler
    02. get withdraw amount by using getInputFieldValueById function
    03. get previous withdraw amount by using getElementValueById function
    04. calculate new withdraw total and set the value
    04.5. set new withdraw total by using setTextElementValueById function
    05. get previous balance total by using getElementValueById function
    06. calculate new balance total
    07. set balance total using setTextElementValueById function
*/

document.getElementById("btn-withdraw").addEventListener("click", function() {
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawAmount = getElementValueById("withdraw-total");
    const newWithdrawTotal = getTotal(previousWithdrawAmount, newWithdrawAmount);
    setTextElementValueById("withdraw-total", newWithdrawTotal);

    const previousBalanceTotal = getElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
})