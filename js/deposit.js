document.getElementById("btn-deposit").addEventListener("click", function () {
    /* 
        01. get the element by id
        02. get the value from the element
        03. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById("deposit-field");

    /* 
         01. get previous deposit total by id
    */
    const previousDepositTotal = getElementValueById("deposit-total");

    /* 
          01. calculate new deposit total
    */
    const newDepositTotal = getTotal(previousDepositTotal, newDepositAmount);

    /* 
          01. set deposit total value
    */
    setTextElementValueById("deposit-total", newDepositTotal);

    /* 
          01. get previous balance by using the function 
    */
    const previousBalanceTotal = getElementValueById("balance-total");

    const newBalanceTotal = getTotal(previousBalanceTotal, newDepositAmount);

    setTextElementValueById("balance-total", newBalanceTotal);
}) 