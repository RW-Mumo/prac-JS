
{/* amount due = Unit price * Quantity
Discounted amount = (Unit price * Quantity)1 - (Unit price * Quantity* Discount) */}

getAmountDue = function () {
    var numVal1 = Number(document.getElementById("unit-price").value);
    var numVal2 = Number(document.getElementById("quantity").value);


    var amountDue =(numVal1 * numVal2)
    document.getElementById("amountDue").value = amountDue.toFixed(2);
}

getDiscountedAmount = function (){
    var numVal1 = Number(document.getElementById("quantity").value);
    var numVal2 = Number(document.getElementById("quantity").value);
    var numval3 = Number(document.getElementById("discount").value)/100;

    var discountedAmount = ((numVal1*numVal2)1 - (numVal1*numVal2*numval3));
    document.getElementById("discountedAmount").value = discountedAmount.toFixed(2);
}