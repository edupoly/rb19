"use strict";
exports.__esModule = true;
function rev(ar) {
    var br = [];
    ar.forEach(function (a) {
        br.unshift(a);
    });
    return br;
}
console.log(rev([12, 23, 34]));
console.log(rev(['rani', 'sai', 'kittu']));
