"use strict";
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
var res;
res = add(12, 23);
res = add(22, 44);
function calculateTax(amount, format) {
    var calcAmount = amount * 1.2;
    return format ? "$".concat(calcAmount.toFixed(2)) : calcAmount;
}
var mytax = calculateTax(325, false);
var mytax2 = calculateTax(444, true);
console.log(mytax.toFixed(2));
console.log(mytax2.charAt(0));
