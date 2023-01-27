// Decorator Function
function log(target, key, descriptor) {
    // square
    console.log(key);
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Using the decorator @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    return Calculator;
}());
var ob1 = new Calculator();
ob1.square(3);
