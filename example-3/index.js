//Core types of ts -> number, string, boolean
var printAdd = function (n1, n2, label, showResult) {
    if (showResult) {
        console.log("" + label + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
};
//explicitly defining type
var number1;
number1 = 20;
//Type inference - automatically assign the type based on the value stored.
//With const it can't be changed also.
var number2 = 10;
var label = "Result is: ";
printAdd(number1, number2, label, true);
