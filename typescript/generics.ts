function rev2(ar:(string[]|number[])):(string[]|number[]){
  var br:(string[]|number[])=[];
  ar.forEach((a:(string|number))=>{
    br.unshift(a);//error
  })
  return br;
}
console.log(rev2([12,23,34]));
console.log(rev2(['rani','sai','kittu']));

// function rev<T>(ar:T[]):T[]{
//   var br:T[]=[];
//   ar.forEach((a:T)=>{
//     br.unshift(a);
//   })
//   return br;
// }
// console.log(rev([12,23,34]));
// console.log(rev(['rani','sai','kittu']));
// export {}