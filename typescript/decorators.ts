// Decorator Function
function log(target: any, key: string, descriptor: any) {
  // square
      console.log(key);
  }
  class Calculator {
  // Using the decorator @log
  @log
  square(n: number) {
  return n * n; }
  }
  var ob1 = new Calculator();
  ob1.square(3)