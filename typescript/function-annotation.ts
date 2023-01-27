function add(a:number,b:number):number{
  return a+b;
}

var res:number;
res = add(12,23);
res = add(22,44);


function calculateTax(amount: number, format: boolean): (string | number) {
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

// var mytax:number =  calculateTax(325,false) as number;
// var mytax2:string = calculateTax(444,true) as string;

var mytax:number =  <number> calculateTax(325,false);
var mytax2:string = <string> calculateTax(444,true);

console.log(mytax.toFixed(2));
console.log(mytax2.charAt(0))

var el = document.getElementById("d1") as HTMLInputElement;
var val =  el.value;

export {}