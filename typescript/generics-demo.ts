var ar:Array<number> = [11,23,10,34];
var br:Array<number> = [];

function rev<T>(arr:Array<T>){
  var fr:Array<T>=[];
  arr.forEach((f)=>{
    fr.unshift(f)
  })
  return fr;
}

ar.forEach((a)=>{
  br.unshift(a)
})
console.log(br)

var dr:Array<string> = ['praveen','mounika','gautam','babu']
var er:Array<string>  = [];
dr.forEach((s)=>{
  er.unshift(s)
})
console.log(er)

var pr:Array<number> = [100,200,300,400];
var qr:Array<number> = rev(pr)
console.log("qr",qr)

var jr:Array<string> = ['manish','kartik','yashwanth','jay'];
var sr = rev(jr);