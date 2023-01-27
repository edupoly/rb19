var ar = [11, 23, 10, 34];
var br = [];
function rev(arr) {
    var fr = [];
    arr.forEach(function (f) {
        fr.unshift(f);
    });
    return fr;
}
ar.forEach(function (a) {
    br.unshift(a);
});
console.log(br);
var dr = ['praveen', 'mounika', 'gautam', 'babu'];
var er = [];
dr.forEach(function (s) {
    er.unshift(s);
});
console.log(er);
var pr = [100, 200, 300, 400];
var qr = rev(pr);
console.log("qr", qr);
